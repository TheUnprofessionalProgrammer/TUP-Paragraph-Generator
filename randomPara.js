const text = [
    "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
    "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",
    "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
    "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.",
    "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",
    "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.",
    "Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.",
    "Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.",
    "Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.",
    "Engineering is the goal-oriented process of designing and making tools and systems to exploit natural phenomena for practical human means, often (but not always) using results and techniques from science. The development of technology may draw upon many fields of knowledge, including scientific, engineering, mathematical, linguistic, and historical knowledge, to achieve some practical result.",
    "Technology is often a consequence of science and engineering, although technology as a human activity precedes the two fields. For example, science might study the flow of electrons in electrical conductors by using already-existing tools and knowledge. This new-found knowledge may then be used by engineers to create new tools and machines such as semiconductors, computers, and other forms of advanced technology. In this sense, scientists and engineers may both be considered technologists; the three fields are often considered as one for the purposes of research and reference.",
    "The exact relations between science and technology, in particular, have been debated by scientists, historians, and policymakers in the late 20th century, in part because the debate can inform the funding of basic and applied science. In the immediate wake of World War II, for example, it was widely considered in the United States that technology was simply 'applied science' and that to fund basic science was to reap technological results in due time. An articulation of this philosophy could be found explicitly in Vannevar Bush's treatise on postwar science policy, Science - The Endless Frontier: 'New products, new industries, and more jobs require continuous additions to knowledge of the laws of nature ... This essential new knowledge can be obtained only through basic scientific research. In the late-1960s, however, this view came under direct attack, leading towards initiatives to fund science for specific tasks (initiatives resisted by the scientific community). The issue remains contentious, though most analysts resist the model that technology is a result of scientific research."
];

let output = document.getElementById('output');
let generator = document.getElementById('generator');
let number = document.getElementById('number');

generator.addEventListener('click', (e)=>{
    if(number.value == 0){
            output.innerHTML = "";
            number.classList.remove('border');
    }

    else if(number.value == 1){
        random = Math.random();
        output.innerHTML = `<p class="para">${text[Math.ceil(0 + (11-0)*random)]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 2){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 3){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 4){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 5){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[4]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 6){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 7){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 8){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value == 9){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value >= 10){
        output.innerHTML = "";
        output.innerHTML += `<p class="para">${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]} <br><br> ${text[Math.ceil(0 + (11-0)*Math.random())]}</p>`;
        number.classList.remove('border');
    }

    else if(number.value <= -1){
        // output.innerHTML = "";
        output.innerHTML = "Error! Cannot Enter Negative Value";
        output.classList.add('color');
        number.classList.add('border');
    }
})