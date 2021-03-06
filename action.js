var erDerKlikketPaaAlleKnapperFlag = false;
var antalNudes = 0;
$(window).on("load", trykStart);

function trykStart() {
    console.log("trykStart");
    $("#startskaerm").addClass("show");
    $("#forgrund").hide();
    $("#mellemgrund").hide();
     $("#bad_slutning").hide();
    $("#god_slutning").hide();
    $("#baggrund").hide();
    $("#bruser_container").hide();
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#oskar_container").hide();
    $("#haand_container").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#indhold_container").hide();
    $("#text_container").hide();
    $("#slutskaerm").hide();
    $("#link2_container").hide();
    $("#start").on("click", startAnim);
}

function startAnim() {
    console.log("animationen starter");
    $("#bruseren_drypper")[0].play();
    $("#bruseren_drypper").animate({
        volume: .7
    }, 30000);
    $("#start_container").hide();
    $("#link_container").hide();
    $("#link2_container").hide();
    $("#startskaerm").hide();
    $("#bruseren_drypper")[0].volume = 0.1;
    $("#bruseren_drypper")[0].loop = true;
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#haand_container").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#indhold_container").hide();
    $("#billede_10").hide();
    $("#billede_11").hide();
    $("#forgrund").show();
    $("#mellemgrund").show();
    $("#baggrund").show();
    $("#bruser_container").show();
    $("#oskar_container").show();
    $("#text_container").hide();
    $("#bruser_container").addClass("dryp_pose");
    $("#bruser_sprite").addClass("bruser_dryp");
    $("#oskar_sprite").addClass("oskar_walkcycle");
    $("#oskar_container").addClass("move_right");
    $("#oskar_container").on("animationend", vennerKommerInd);
}

function vennerKommerInd() {
    console.log("vennerKommerInd");
    $("#oskar_container").off("animationend", vennerKommerInd);
    $("#dreng1_container").show();
    $("#dreng2_container").show();
    $("#oskar_sprite").removeClass("oskar_walkcycle");
    $("#oskar_sprite").addClass("oskar_afslappet");
    $("#oskar_container").addClass("oskar_end_pose");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng1_container").addClass("dreng1_move_right");
    $("#dreng2_sprite").addClass("dreng2_walkcycle");
    $("#dreng2_container").addClass("dreng2_move_right");
    $("#dreng1_container").on("animationend", ven1Gaar);
}

function ven1Gaar() {
    console.log("dreng1 går til oskar");
    $("#dreng1_container").off("animationend", ven1Gaar);
    $("#dreng2_sprite").removeClass("dreng2_walkcycle");
    $("#dreng2_sprite").addClass("dreng2_start_pose");
    $("#dreng1_container").removeClass("dreng1_move_right");
    $("#dreng1_container").addClass("dreng1_oskar");
    $("#dreng1_container").on("animationend", ven1HiverHaandklaedetNed);
}

function ven1HiverHaandklaedetNed() {
    console.log("vennen hiver håndklædet ned");
    $("#gasp")[0].play();
    $("#gasp").animate({
        volume: .7
    }, 30000);
    $("#gasp")[0].volume = 0.7;
    $("#dreng1_container").off("animationend", ven1HiverHaandklaedetNed);
    $("#dreng1_sprite").removeClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_oskar");
    $("#dreng1_container").addClass(" dreng1_staa_oskar");
    $("#oskar_sprite").removeClass("oskar_afslappet");
    $("#dreng1_sprite").addClass("dreng1_pull");
    $("#oskar_sprite").addClass("oskar_ned");
    $("#oskar_sprite").on("animationend", kameraInd);
}

function kameraInd() {
    console.log("mobil kommer ind");
    $("#gruppe_grin")[0].play();
    $("#gruppe_grin").animate({
        volume: .7
    }, 10000);
    $("#gruppe_grin")[0].volume = 0.001;
    $("#gruppe_grin")[0].loop = true;
    $("#oskar_sprite").off("animationend", kameraInd);
    $("#haand_container").show();
    $("#dreng1_sprite").removeClass("dreng1_pull");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_staa_oskar");
    $("#dreng1_container").addClass("dreng1_move_left");
    $("#haand_sprite").addClass("haand_rolig");
    $("#haand_container").addClass("haand_enter");
    $("#dreng2_sprite").removeClass("dreng2_start_pose");
    $("#dreng2_sprite").addClass("dreng2_laughcycle");
    $("#dreng1_container").on("animationend", oskarHiverHaandklaedetOp);
}

function oskarHiverHaandklaedetOp() {
    console.log("oskarHiverHaandklaedetOp");
    $("#dreng1_container").off("animationend", oskarHiverHaandklaedetOp);
    $("#kameralyd")[0].play();
    $("#dreng2_grin")[0].play();
    $("#dreng2_grin").animate({
        volume: .7
    }, 30000);
    $("#dreng2_grin")[0].volume = 0.001;
    $("#dreng2_grin")[0].loop = true;
    $("#dreng1_sprite").removeClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_move_left");
    $("#dreng1_sprite").addClass("dreng1_laughcycle");
    $("#dreng1_container").addClass("dreng1_start_pose");
    $("#oskar_sprite").addClass("oskar_up");
    $("#haand_sprite").removeClass("haand_rolig");
    $("#haand_container").removeClass("haand_enter");
    $("#haand_sprite").addClass("haand_tryk");
    $("#haand_container").addClass("haand_billede_pose");
    $("#oskar_sprite").on("animationend", branch);
}

function branch() {
    console.log("branch");
    $("#oskar_sprite").off("animationend", branch);
    $("#bruseren_drypper")[0].loop = false;
    $("#oskar_sprite").removeClass("oskar_up");
    $("#oskar_sprite").addClass("oskar_valg");
    $("#oskar_container").removeClass("move_right");
    $("#oskar_sprite").removeClass("oskar_ned");
    $("#haand_sprite").removeClass("haand_tryk");
    $("#haand_container").removeClass("haand_billede_pose");
    $("#haand_sprite").addClass("haand_rolig");
    $("#haand_container").addClass("haand_tilbage");
    $("#haand_container").on("animationend", fork);
}

function fork() {
    console.log("fork");
    $("#gruppe_grin")[0].loop = false;
    $("#dreng2_grin")[0].loop = false;
    $("#indhold_container").show();
    $("#haand_container").addClass("foran_indhold");
    $("#valg1_container").show();
    $("#valg2_container").show();
    $("#valg1").on("click", oskarOvertaler);
    $("#valg2").on("click", oskarGriner);
}

function oskarOvertaler() {
    console.log("oskarOvertaler");
    $("#overtal")[0].play();
    $("#overtal").animate({
        volume: .7
    }, 30000);
    $("#overtal")[0].volume = 0.001;
    $("#overtal")[0].loop = true;
    $("#haand_container").off("animationend", fork);
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#valg1").off("click", oskarOvertaler);
    $("#valg2").off("click", oskarGriner);
    $("#oskar_sprite").removeClass("oskar_valg");
    $("#oskar_sprite").addClass("oskar_snak");
    $("#dreng1_sprite").removeClass("dreng1_laughcycle");
    $("#dreng2_sprite").removeClass("dreng2_laughcycle");
    $("#oskar_sprite").on("animationend", randomValg);
}

function randomValg() {
    console.log("randomValg");
    $("#overtal")[0].loop = false;
    $("#oskar_sprite").off("animationend", randomValg);
    $("#monster_sprite").removeClass("monster_walkcycle");
    $("#monster_sprite").addClass("straight2");
    if (Math.random() >= 0.5) { //<-- fifty fifty//
        console.log("True");
        venOvertalt(); //<-- funktion navn, den hopper derved til den funktion//
    }
    else {
        console.log("False");
        startEnTimer();
    }
}
/******************VEN OVERTALT**********************/
function venOvertalt() {
    console.log("venOvertalt");
    $("#overtal")[0].loop = false;
    $("#haand_container").off("animationend", fork);
    $("#oskar_sprite").off("animationend", venOvertalt);
    $("#oskar_sprite").addClass("oskar_valg");
    $("#oskar_sprite").removeClass("oskar_snak");
    $("#haand_sprite").addClass("haand_tryk_2");
    $("#haand_sprite").on("animationend", slettet);
}

function slettet() {
    console.log("slettet");
    $("#overtal")[0].loop = false;
    $("#lettet")[0].play();
    $("#oskar_sprite").addClass("oskar_lettet");
    $("#oskar_sprite").removeClass("oskar_valg");
    $(".tryk").hide();
    $("#billede_10").show();
    $("#oskar_sprite").on("animationend", godSlutning);
}
/***TILFØJ SLUTNING****/
/******************START EN TIMER**********************/
function startEnTimer() {
    console.log("startEnTimer");
    $("#venteMusik")[0].play();
    $("#venteMusik").animate({
        volume: .7
    }, 30000);
    $("#venteMusik")[0].volume = 0.07;
    $("#venteMusik")[0].loop = true;
    $("#haand_container").off("animationend", fork);
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#valg1").off("click", oskarOvertaler);
    $("#valg2").off("click", oskarGriner);
    $("#oskar_sprite").removeClass("oskar_snak");
    $("#oskar_sprite").addClass("oskar_valg");
    $("#text_container").show();
    $("#text_container").addClass("pulse2");
    $("#haand_container").removeClass("foran_indhold");
    $("#text_container").on("animationend", showBilleder);
}

function showBilleder() {
    console.log("showBilleder");
    $("#text_container").off("animationend", showBilleder);
    $("#text_container").hide();
    $("#oskar_sprite").addClass("oskar_valg");
    $("#oskar_sprite").removeClass("oskar_slet_nude");
    $(".tryk").addClass("pulse");
    setTimeout(haandDeltTo, 10000);
    $(".tryk").on("click", nudeKlik);
}

function nudeKlik() {
    console.log("nudeKlik");
    $(".tryk").off("click", nudeKlik);
    $(".tryk").removeClass("pulse");
    $(this).hide();
    antalNudes++;
    $("#oskar_sprite").removeClass("oskar_valg");
    $("#oskar_sprite").addClass("oskar_slet_nude");
    $("#oskar_sprite").on("animationend", faerdig);
}

function faerdig() {
    console.log("faerdig");
    $("#oskar_sprite").off("animationend", faerdig);
    $("#oskar_sprite").removeClass("oskar_valg");
    $("#oskar_sprite").removeClass("oskar_slet_nude");
    if (antalNudes >= 9) {
        console.log("Over 9");
        sletNudes();
    }
    else {
        console.log("Under 9");
        showBilleder();
    }
}

function sletNudes() {
    console.log("sletNudes");
    $("#lettet")[0].play();
    $("#venteMusik")[0].loop = false;
    $("#text_container").off("animationend", showBilleder);
    $("#oskar_sprite").off("animationend", startEnTimer);
    $("#oskar_sprite").off("animationend", faerdig);
    $("#text_container").hide();
    $("#billede_10").show();
    $("#oskar_sprite").addClass("oskar_grin");
    $("#oskar_sprite").on("animationend", godSlutning);
}

function timeOut() {
    console.log("timeOut");
    if (erDerKlikketPaaAlleKnapperFlag == true) {
        sletNudes();
    }
    else {
        haandDeltTo();
    }
}

function haandDeltTo() {
    console.log("haandDeltTo");
   /* $("#aaah")[0].play();
    $("#aaah")[0].play();*/
    $("#venteMusik")[0].loop = false;
    $("#oskarUsikker")[0].loop = false;
    $("#klorHaar")[0].loop = false;
    $("#billede_11").show();
    $("#billede_10").hide();
    $(".tryk").hide();
    $("#haand_container").addClass("foran_indhold")
    $("#oskar_sprite").off("animationend", haandDelt);
    $("#haand_sprite").addClass("haand_tryk_2");
    $("#haand_sprite").on("animationend", badSlutning);
}
/******************OSKAR GRINER**********************/
function oskarGriner() {
    console.log("oskarGriner");
    $("#oskarUsikker")[0].play();
    $("#oskarUsikker").animate({
        volume: .7
    }, 10000);
    $("#oskarUsikker")[0].volume = 0.7;
    $("#oskarUsikker")[0].loop = true;
    $("#haand_container").off("animationend", fork);
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#valg1").off("click", oskarOvertaler);
    $("#valg2").off("click", oskarGriner);
    $("#oskar_sprite").addClass("oskar_grin");
    $("#oskar_sprite").on("animationend", haandDelt);
}

function haandDelt() {
    console.log("haandDelt");
    $("#oskarUsikker")[0].loop = false;
    $("#billede_11").show();
    $(".tryk").hide();
    $("#oskar_sprite").off("animationend", haandDelt);
    $("#haand_sprite").removeClass("haand_rolig");
    $("#haand_sprite").addClass("haand_tryk_2");
    $("#haand_sprite").on("animationend", badSlutning);
}
/***TILFØJ SLUTNING****/
function godSlutning() {
    console.log("godSlutning");
    $("#oskar_sprite").off("animationend", godSlutning);
    $("#forgrund").hide();
    $("#mellemgrund").hide();
    $("#baggrund").hide();
    $("#bruser_container").hide();
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#oskar_container").hide();
    $("#haand_container").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#indhold_container").hide();
    $("#text_container").hide();
    $("#startskaerm").hide();
    $("#slutskaerm").hide();
    $("#link2_container").hide();


     $("#god_slutning").show();
    $("#god_slutning").addClass("god_slutning_billede");


    $("#god_slutning").on("animationend", slutFrame);
}

function badSlutning() {
    console.log("badSlutning");
    $("#venteMusik")[0].loop = false;
    $("#aaah")[0].loop = false;
    $("#oskar_sprite").off("animationend", badSlutning);
    $("#forgrund").hide();
    $("#mellemgrund").hide();
    $("#baggrund").hide();
    $("#bruser_container").hide();
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#oskar_container").hide();
    $("#haand_container").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#indhold_container").hide();
    $("#text_container").hide();
    $("#startskaerm").hide();
    $("#slutskaerm").hide();
    $("#link2_container").hide();
     $("#bad_slutning").show();
    $("#bad_slutning").addClass("bad_slutning_billede");


    $("#bad_slutning").on("animationend", slutFrame);
}

function slutFrame() {
    console.log("slutFrame");
    $("#venteMusik")[0].loop = false;
    $("#aaah")[0].loop = false;
     $("#god_slutning").off("animationend", slutFrame);

    $("#bad_slutning").off("animationend", slutFrame);
    $("#forgrund").hide();
    $("#mellemgrund").hide();
    $("#baggrund").hide();
    $("#bruser_container").hide();
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#oskar_container").hide();
    $("#haand_container").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();
    $("#indhold_container").hide();
    $("#text_container").hide();
    $("#startskaerm").hide();
    $("#slutskaerm").show();
    $("#link2_container").show();
     $("#bad_slutning").hide();
    $("#bad_slutning").addClass("bad_slutning_billede");

}
