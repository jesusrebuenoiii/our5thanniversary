var i = 0;
var txt = 'I love you so so so much forever my love. Right from the start when we became lovers, I truly loved you, until this time you are reading this. I hope you feel the same my love. You are my one and only beautiful and lovely love. I love you so so much and it will never change until forever. No matter what, I will always love you and will always choose you forever and ever my one and only beautiful love.';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    document.getElementById("demo").style.backgroundColor ="violet";
    document.getElementById("demo").style.borderRadius = "25px";
  
    document.getElementById('show1').style.display = 'none';
    document.getElementById('show2').style.display = 'none';
    setTimeout(typeWriter, speed);
    
    
  }
}

var j = 0;

var messagetext =  "Happy Happy Happy Happy Happy 5th Anniversary Love kooo  😋😋😋 thank you so so much yaba sa lahat lahat. I know na masaya ka rin ngayon yaba dahil after all the journeys we have together we are still stronger and keeps getting stronger. Thank you so so much for everything my love 😋 I can't explain how I am feeling now but all I can say is that I am blessed and lucky to have you the most beautiful girl in my life. Mahal na mahal na mahal kita forever love kooo 😘😘😘  I love you so much forever love koooo 😘😘😘  Just like what I am saying always. Sobra ko ikang payaba love ko 😋 sana'y wag na wag mo yan kakalimutan yaba. Dahil mula noon hanggang ngayon. Hindi nagbago ang pagmamahal ko sayo yaba ko😋 Mahal na mahal na mahal kita forever love kooo 😘😘😘  sana ay palagi mo yan tatandaan yaba ko. Wag mo yan kakalimutan dahil pinanghahawakan ko yan mula noon hanggang ngayon. Kahit ano pa ang pagsubok na dumating sa atin. Mananatili tayong matatag. Yan ang tunay na pagmamahal. Despite all the circumstances, good or bad, we stayed with each other and most importantly,  we choose each other. I am not perfect, malayong malayo ako sa pagiging perpektong lalaki, perpektong bf, but all I can say is that I will do everything for you to feel special. Mahal na mahal na mahal kita forever love kooo 😘😘😘  I love you so much forever love koooo 😘😘😘  Thank you so much for everything my love. For all the happiness that you gave me. For all the special moments we celebrate. Yung mga paalala mo yaba, mga pagaalala yaba, at sa napakahabang pasensya mo yaba. Maraming maraming salamat sa lahat yaba. Sana yaba ay walang magsasawa sa ating dalawa. Sana kung gaano tayo katatag mas lalo pa tayong tumatag yaba kooooooo. I knoe na masaya ka rin yaba ngayong araw at mas lalo ako. Noon hindi ko lubos maisip na may babaeng magmamahal sa akin nung wala ka pa. Ang naiisip ko lang yaba ay pangit ako ganyan at nandidiri mga tao sa akin. Pero nung naki partner ka sakin sa sayaw yaba grabe yung saya ko hehe. Syempre yung pinakamaganda pa talaga nag partner sa akin hehehe Salamat sa lahat yabaaaaaaa. Sa loob ng 5 years naramdaman ko yung pagmamahal na hindi matutumbasan yaba. Alam ko na minsan nagkakasagutan, nagkakasakitan, nagaaway tayo yabaaaaaaaaa. But the best thing about us yaba is hindi tayo sumuko. Palagi natin yaba pinipili isat isa and that is very good yaba. Salamat sa lahat lahat lahat yaba lalong lalo na sa pagmamahal na palagi mong ibinibigay sa akin yaba 🤗🤗🤗 Yaba gusto ko rin humingi ng tawad sa lahat ng mga nagawa ko dati at sa mga pagaaway natin. I know na hindi na yan mawawala sa isip but I am still hoping na one day, makalimutan na natin lahat. I love you so much yaba forever and di yan magbabago yaba. Nagkamali ako noon ngunit pilit ko itong kinakalimutan at ginagawa ko ang tama dahil ayaw ko na mawala ka sa akin yaba. Kahit anong mangyari yaba ikaw lang ang mahal ko at pipiliin ko forever yaba 🤗😋 I love you so much forever love koooo 😘😘😘  Mahal na mahal na mahal kita forever love kooo 😘😘😘  promise ko yaba na gagawin ko ang tama palagi dahil ayaw ko na mawala ang gem ng buhay ko, ang princesa ng buhay ko, ang kulay at kahulugan ng buhay ko. Yaba mahal na mahal na mahal kita at wag mo yan kakalimutan. Sana yaba ko ay maabot na natin mga pangarap natin. I know na kaya natin yaba at naniniwala ako sa bawat isa. Walang susuko yaba haaaaaaa. Minsan alam ko na aabut yung time na mahirap. Pero sana wag tayo susuko yaba. Mahal natin isat isa. At alam ko na paninindigan natin ito kahit na anong mangyari. Mahal na mahal na mahal kita forever love kooo 😘😘😘  I love you so much forever love koooo 😘😘😘 Walang susuko at walang magbabago yaba. Gusto kitang makasama yaba forever sa mas napakarami pang yearssssssss. Bastat ngayon gusto ko lang icelebrate yung 5 years na pinagsamahan natin yaba. Lahat ng mga memories natin yaba daragdagan pa natin iyan. More memories to come yaba. Mas marami pa tayong pupuntahan yaba at syempre madami pa tayong masarap na kakainqn hehehehe. Basta walang iwanan yaba ha? Ako sana yaba kooooo?  Palagi natin piliin isat isa yaba kooooo. Walang susuko yaba tandaan mo yan ha? Happy Happy Anniversary and Birthday Love koooo 🤗🤗🤗";

var messagespeed = 90;
function showmessage() {
  if (j<messagetext.length) {
    document.getElementById("show6").innerHTML += messagetext.charAt(j);
    j++;
    document.getElementById("show6").style.backgroundColor ="violet";
    document.getElementById("show6").style.borderRadius = "25px";
    setTimeout(showmessage, messagespeed);
  
  }
}


function myClick2() {
    setTimeout(
      function() {
        document.getElementById('id1').style.display = 'none';
        document.getElementById('demo').style.display='none';
        document.getElementById('show3').style.display='block';
       
      }, 45000);
  }

function show1() {

document.getElementById('show1').style.display = 'block';
document.getElementById('butt1').style.display = 'none';
document.getElementById('home').style.display = 'none';
document.getElementById('show2').style.display = 'block';
}

function show2() {
    setTimeout(
        function() {
          document.getElementById('id1').style.display='none';
        }, 42000);

}

function show4() {
  document.getElementById('show4').style.display = 'block';
  document.getElementById('show6').style.display = 'block';
  document.getElementById('show3').style.display = 'none';
  document.getElementById('demo').style.display = 'none';
  document.getElementById('id1').style.display = 'none';
}
function show5() {
  document.getElementById('show5').style.display = 'block';
  document.getElementById('show6').style.display = 'block';
  document.getElementById('show3').style.display = 'none';
  document.getElementById('demo').style.display = 'none';
  document.getElementById('id1').style.display = 'none';
}

function myClick() {
  setTimeout(
    function() {
      document.getElementById('show7').style.display='block';
      document.getElementById('poemchoices').style.display='block';

    }, 435000);
}

function myClick3() {
  setTimeout(
    function() {
      document.getElementById('show4').style.display='none';
      document.getElementById('show6').style.display = 'none';


    }, 435000);

}
function myClick4() {
  setTimeout(
    function() {
      document.getElementById('show5').style.display='none';
      document.getElementById('show6').style.display = 'none';


    }, 42000);

}
function myClick5() {
  setTimeout(
    function() {
      document.getElementById('show7').style.display='block';

    }, 438000);

}

function readrhyme() {

document.getElementById("poemchoices").style.display='none';
document.getElementById("poem").style.display='block';
document.getElementById("show7").style.display='none';

}

function closepoem() {
    setTimeout(
        function() {

            document.getElementById("poem").style.display='none';
            document.getElementById("lastmessage").style.display='block';
            
            document.getElementById("show7").style.display='none';
          document.getElementById("poem").style.display='none';
        }, 730000);
    
}

function openslide() {
  setTimeout(
      function() {

          document.getElementById("poem").style.display='none';
          document.getElementById("lastmessage").style.display='none';
          document.getElementById("memories").style.display ='block';
          document.getElementById("memory").style.display ='block';
          document.getElementById("show7").style.display='none';
      }, 80000);
  
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
