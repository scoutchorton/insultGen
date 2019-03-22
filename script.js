addEventListener('load', function (){
    var t="artless base-court apple-john bawdy bat-fowling baggage beslubbering beef-witted barnacle bootless beetle-headed bladder churlish boil-brained boar-pig cockered clapper-clawed bugbear clouted clay-brained bum-bailey craven common-kissing canker-blossom currish crook-pated clack-dish dankish dismal-dreaming clotpole dissembling dizzy-eyed coxcomb droning doghearted codpiece errant dread-bolted death-token fawning earth-vexing dewberry fobbing elf-skinned flap-dragon froward fat-kidneyed flax-wench frothy fen-sucked flirt-gill gleeking flap-mouthed foot-licker goatish fly-bitten fustilarian gorbellied folly-fallen giglet impertinent fool-born gudgeon infectious full-gorged haggard jarring guts-griping harpy loggerheaded half-faced hedge-pig lumpish hasty-witted horn-beast mammering hedge-born hugger-mugger mangled hell-hated joithead mewling idle-headed lewdster paunchy ill-breeding lout pribbling ill-nurtured maggot-pie puking knotty-pated malt-worm puny milk-livered mammet quailing motley-minded measle rank onion-eyed minnow reeky plume-plucked miscreant roguish pottle-deep moldwarp ruttish pox-marked mumble-news saucy reeling-ripe nut-hook spleeny rough-hewn pigeon-egg spongy rude-growing pignut surly rump-fed puttock tottering shard-borne pumpion unmuzzled sheep-biting ratsbane vain spur-galled scut venomed swag-bellied skainsmate villainous tardy-gaited strumpet warped tickle-brained varlot wayward toad-spotted vassal weedy unchin-snouted whey-face yeasty weather-bitten wagtail";
    t=t.split(' ');
    var insults=[[],[],[]];
    for(var i=0;i<t.length;i+=3){
        insults[0].push(t[i]);
        insults[1].push(t[i+1]);
        insults[2].push(t[i+2]);
    }
    document.getElementsByTagName('button')[0].addEventListener('click', function(){
		//https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript
        document.getElementById('output').innerHTML+=`<a onclick="responsiveVoice.speak(this.innerHTML);var t=this;this.classList.add('playing');setTimeout(function(){t.classList.remove('playing');},2500);">Why you ${insults[0][Math.floor(Math.random()*insults[0].length)]}, ${insults[1][Math.floor(Math.random()*insults[1].length)]}, ${insults[2][Math.floor(Math.random()*insults[2].length)]}!</a>`;
    });
    document.getElementsByTagName('button')[1].addEventListener('click', function (){
        for(var i=0;i<100;i++){
            document.getElementsByTagName('button')[0].click();
        }
    });
});
