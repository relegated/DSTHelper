$(document).ready( () => {
    $("#submitButton").click( () => {
        $.get(BuildApiString(), (data, status) => {
            data.officials.forEach(official => {
                $("#federalOfficers").html(GetOfficerHTML(official));
            });
        })
    });
    $("#address").on("input", () => {
        if ($("#address").val().length > 0){
            $("#submitButton").prop("disabled", false);
        }
        else {
            $("#submitButton").prop("disabled", true);
        }
    });
});

function BuildApiString() {
    return `https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByAddress?key=AIzaSyDOoCjpX2_v8KmJonjuQHLwCLxBCk8MNK4&address=`
    + `{"${$("#address").val()} ${$("#city").val()} ${$("#state").value} ${$("#zip").val()}"`
    + `,"includeOffices":true, "roles":["legislatorLowerBody","legislatorUpperBody"]}`; 
}

function GetOfficerHTML(official) {
    let returnHTML = `<div>Name:<br>${official.name} <br>URLS:<br>`;
    official.urls.forEach(url => {
        returnHTML += `<a href="${url}>${url}</a>`;
    });
    returnHTML += "Phone:<br>";
    official.phones.forEach(phone => {
        returnHTML += phone + "<br>";
    });
    returnHTML += "Channels:<br>";
    official.returnHTML.forEach(channel => {
        if (channel.type == "Facebook"){
            returnHTML += `<a href="https://facebook.com/${channel.id}>Facebook</a><br>`;
        }
        else if (channel.type == "Twitter"){
            returnHTML += `<a href="https://twitter.com/${channel.id}>Twitter</a><br>`;
        }
    });
    returnHTML += "<br><br></div>";
    return returnHTML;
}