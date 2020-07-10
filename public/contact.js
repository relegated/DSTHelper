$(document).ready(() => {
    $("#submitButton").click(() => {
        $.get(BuildApiString(), (data, status) => {
            let allHtml = "";
            data.officials.forEach(official => {
                allHtml += GetOfficerHTML(official);
            });
            $("#federalOfficers").html(allHtml);
            $("#stateWebsite").html(GetStateWebsiteHTML());
        })
    });
    $("#address").on("input", () => {
        HandleSubmitButtonEnableDisable();
    });
    $("#state").on("input", () => {
        HandleSubmitButtonEnableDisable();
    })
});

function GetStateWebsiteHTML() {
    return `<div class="alert alert-info"><a href="${GetStateWebsite()}" class="alert-link">
    <strong>Click Here for additional State Legistlature Information for ${$("#state").val().toUpperCase()}</strong></a></div>`;
}

function GetStateWebsite() {
    let state = $("#state").val();
    state = state.toUpperCase();

    switch (state) {
        case "ALABAMA":
        case "AL":
            return "https://cqrcengage.com/alabama/?0";
        case "ALASKA":
        case "AK":
            return "http://akleg.gov/";
        case "ARIZONA":
        case "AZ":
            return "https://www.azleg.gov/memberroster/";
        case "ARKANSAS":
        case "AR":
            return "https://www.arkleg.state.ar.us/Legislators/List";
        case "CALIFORNIA":
        case "CA":
            return "http://findyourrep.legislature.ca.gov/";
        case "COLORADO":
        case "CO":
            return "https://leg.colorado.gov/find-my-legislator";
        case "CONNECTICUT":
        case "CT":
            return "https://www.cga.ct.gov/asp/menu/cgafindleg.asp";
        case "DELEWARE":
        case "DE":
            return "https://legis.delaware.gov/FindMyLegislator";
        case "FLORIDA":
        case "FL":
            return "https://www.myfloridahouse.gov/Sections/Representatives/myrepresentative.aspx";
        case "GEORGIA":
        case "GA":
            return "http://www.house.ga.gov/en-US/default.aspx";
        case "HAWAII":
        case "HI":
            return "https://www.capitol.hawaii.gov/house.aspx";
        case "IDAHO":
        case "ID":
            return "https://legislature.idaho.gov/legislators/whosmylegislator/";
        case "ILLINOIS":
        case "IL":
            return "http://www.ilga.gov/house/";
        case "INDIANA":
        case "IN":
            return "http://iga.in.gov/legislative/find-legislators/";
        case "IOWA":
        case "IA":
            return "https://www.legis.iowa.gov/legislators/find";
        case "KANSAS":
        case "KS":
            return "http://www.kslegislature.org/li_2020s/";
        case "KENTUCKY":
        case "KY":
            return "https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html";
        case "LOUISIANA":
        case "LA":
            return "https://www.legis.la.gov/legis/Bios.aspx?cid=H";
        case "MAINE":
        case "ME":
            return "https://legislature.maine.gov/house/house/MemberProfiles/ContactYourLegislator";
        case "MARYLAND":
        case "MD":
            return "https://msa.maryland.gov/msa/mdmanual/06hse/html/hsedist.html";
        case "MASSACHUSETTS":
        case "MA":
            return "https://malegislature.gov/search/findmylegislator";
        case "MICHIGAN":
        case "MI":
            return "https://www.legislature.mi.gov/(S(bjxfzks35n1s0evh3mkzx1td))/mileg.aspx?page=home";
        case "MINNESOTA":
        case "MN":
            return "https://www.gis.leg.mn/iMaps/districts/";
        case "MISSISSIPPI":
        case "MS":
            return "http://www.legislature.ms.gov/";
        case "MISSOURI":
        case "MO":
            return "http://www.senate.mo.gov/LegisLookup/default.aspx/leg_lookup.aspx";
        case "MONTANA":
        case "MT":
            return "https://leg.mt.gov/legislator-lookup/";
        case "NEBRASKA":
        case "NE":
            return "https://nebraskalegislature.gov/";
        case "NEVADA":
        case "NV":
            return "https://www.leg.state.nv.us/App/Legislator/A/Assembly/";
        case "NEW HAMPSHIRE":
        case "NH":
            return "https://www.nh.gov/nhveterans/how/legislator.htm";
        case "NEW JERSY":
        case "NJ":
            return "https://www.njleg.state.nj.us/selectmun.asp";
        case "NEW MEXICO":
        case "NM":
            return "https://www.nmlegis.gov/members/Legislator_List?T=R";
        case "NEW YORK":
        case "NY":
            return "https://nyassembly.gov/mem/";
        case "NORTH CAROLINA":
        case "NC":
            return "https://www.ncleg.gov/Members/RepresentationByCounty/H";
        case "NORTH DAKOTA":
        case "ND":
            return "https://www.legis.nd.gov/assembly/65-2017/members";
        case "OHIO":
        case "OH":
            return "https://www.legislature.ohio.gov/";
        case "OKLAHOMA":
        case "OK":
            return "http://www.oklegislature.gov/FindMyLegislature.aspx";
        case "OREGON":
        case "OR":
            return "https://www.oregonlegislature.gov/house/Pages/RepresentativesAll.aspx";
        case "PENNSYLVANIA":
        case "PA":
            return "https://www.legis.state.pa.us/cfdocs/legis/home/findyourlegislator/";
        case "RHODE ISLAND":
        case "RI":
            return "http://www.rilin.state.ri.us/representatives/default.aspx";
        case "SOUTH CAROLINA":
        case "SC":
            return "https://www.scstatehouse.gov/legislatorssearch.php";
        case "SOUTH DAKOTA":
        case "SD":
            return "https://sdlegislature.gov/Legislators/Who_Are_My_Legislators/default.aspx";
        case "TENNESSEE":
        case "TN":
            return "http://www.capitol.tn.gov/legislators/";
        case "TEXAS":
        case "TX":
            return "https://capitol.texas.gov/";
        case "UTAH":
        case "UT":
            return "https://le.utah.gov/";
        case "VERMONT":
        case "VT":
            return "https://legislature.vermont.gov/people/";
        case "VIRGINIA":
        case "VA":
            return "https://whosmy.virginiageneralassembly.gov/";
        case "WASHINGTON":
        case "WA":
            return "https://app.leg.wa.gov/districtfinder/";
        case "WEST VIRGINIA":
        case "WV":
            return "https://www.wvlegislature.gov/";
        case "WISCONSIN":
        case "WI":
            return "https://maps.legis.wisconsin.gov/";
        case "WYOMNIG":
        case "WY":
            return "https://www.wyoleg.gov/Legislators";

        default:
            return "";
    }
}

function HandleSubmitButtonEnableDisable() {
    if ($("#address").val().length > 0 && $("#state").val().length > 0) {
        $("#submitButton").prop("disabled", false);
    }
    else {
        $("#submitButton").prop("disabled", true);
    }
}

function BuildApiString() {
    return `https://www.googleapis.com/civicinfo/v2/representatives`
        + `?address=${$("#address").val()} ${$("#city").val()} ${$("#state").val()} ${$("#zip").val()}`
        + `&roles=legislatorLowerBody&roles=legislatorUpperBody`
        + `&key=AIzaSyDOoCjpX2_v8KmJonjuQHLwCLxBCk8MNK4`;
}

function GetOfficerHTML(official) {
    let returnHTML = `<div class="col-md-6"><div class="card"><div class="card-header"><strong>Name: ${official.name}</strong></div><div class="card-body">URLS:<br>`;
    if (official.urls != null) {
        official.urls.forEach(url => {
            returnHTML += `<a href="${url}">${url}</a>`;
        });
    }

    returnHTML += "<br>Phone:<br>";
    if (official.phones != null) {
        official.phones.forEach(phone => {
            returnHTML += phone + "<br>";
        });
    }

    returnHTML += "Channels:<br>";
    if (official.channels != null) {
        official.channels.forEach(channel => {
            if (channel.type == "Facebook") {
                returnHTML += `<a href="https://facebook.com/${channel.id}">Facebook</a><br>`;
            }
            else if (channel.type == "Twitter") {
                returnHTML += `<a href="https://twitter.com/${channel.id}">Twitter</a><br>`;
            }
        });
    }

    returnHTML += "<br></div></div></div></div><br>";
    return returnHTML;
}