$(document).ready( () => {
    $("#submitButton").click( () => {
        $.get(BuildApiString(), (data, status) => {
            let allHtml = "";
            data.officials.forEach(official => {
                allHtml += GetOfficerHTML(official);
            });
            $("#federalOfficers").html(allHtml);
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
    return `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDOoCjpX2_v8KmJonjuQHLwCLxBCk8MNK4&address=`
    + `"${$("#address").val()} ${$("#city").val()} ${$("#state").val()} ${$("#zip").val()}"`
    + `&includeOffices="true"&roles="{["legislatorLowerBody","legislatorUpperBody"]}`; 
}

function GetOfficerHTML(official) {
    let returnHTML = `<div>Name:<br>${official.name} <br>URLS:<br>`;
    if (official.urls != null){
        official.urls.forEach(url => {
            returnHTML += `<a href="${url}>${url}</a>`;
        });
    }
    
    returnHTML += "<br>Phone:<br>";
    if (official.phones != null){
        official.phones.forEach(phone => {
            returnHTML += phone + "<br>";
        });
    }
    
    returnHTML += "Channels:<br>";
    if (official.channels != null) {
        official.channels.forEach(channel => {
            if (channel.type == "Facebook"){
                returnHTML += `<a href="https://facebook.com/${channel.id}>Facebook</a><br>`;
            }
            else if (channel.type == "Twitter"){
                returnHTML += `<a href="https://twitter.com/${channel.id}>Twitter</a><br>`;
            }
        });
    }
    
    returnHTML += "<br><br></div>";
    return returnHTML;
}