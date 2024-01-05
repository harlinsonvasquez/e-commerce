function cambiartema() {
    let theme = document.getElementById('theme').value;
    let body = document.getElementById('body');
    
    const themes = {
        '1': 'write',
        '2': 'black',
        '3': 'libre'
    };

    for (let key in themes) {
        if (theme === key) {
            body.classList.add(themes[key]);
            localStorage.setItem('theme', themes[key]); // Guardar el tema en localStorage
        } else {
            body.classList.remove(themes[key]);
        }
    }
}
// Verificar y aplicar el tema almacenado en localStorage al cargar la página
window.onload = function() {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        let body = document.getElementById('body');
        body.classList.add(storedTheme);
    }
};

function cambiarIdioma() {
    var idioma = document.querySelector('.form-select').value;//para mirar que idioma selecciono el usuario
    var textos = {
        'en': {
            'hamburguesa1': 'Classic Burger with Cheddar Cheese',
            'descrip1': 'A delicious classic burger with juicy grilled beef, fresh lettuce, ripe tomato, crispy onion, and a special touch of mayonnaise, all between soft bread and melted cheddar cheese.',
            'comprar1': 'Buy',
            'hamburguesa2': 'Vegetarian Burger with Mushrooms',
            'descrip2': 'An exquisite vegetarian option, with a juicy grilled portobello burger, melted cheese, sautéed fresh mushrooms and a mix of fresh vegetables on an artisan bun.',
            'comprar2': 'Buy',
            'hamburguesa3': 'Spicy Chicken Burger with Guacamole',
            'descrip3': 'Spicy flavor with seasoned chicken breast, homemade guacamole, pepper jack cheese, red onion, jalapeños and an explosion of flavors in every bite.',
            'comprar3': 'Buy',
            'hamburguesa4': 'BBQ Burger with Bacon and Homemade Sauce',
            'descrip4': 'A tempting combination with crispy bacon, grilled beef, caramelized onions, melted cheddar cheese and a homemade BBQ sauce that enhances its flavor.',
            'comprar4': 'Buy',
            'hamburguesa5': 'Hawaiian Burger with Pineapple and Teriyaki Sauce',
            'descrip5': 'The perfect tropical touch with a juicy beef burger, grilled pineapple, soft cheese, fresh lettuce and teriyaki sauce that will transport you to Hawaii.',
            'comprar5': 'Buy',
            'hamburguesa6': 'Mediterranean Burger with Olives and Feta Cheese ',
            'descrip6': 'A culinary journey with seasoned lamb, kalamata olives, fresh tomato, cucumber, crisp lettuce and the distinctive flavor of feta cheese.',
            'comprar6': 'Buy',
            'hamburguesa7': 'Mexican Burger with super spicy Jalapenos',
            'descrip7': 'Authentic Mexican flavors with seasoned beef, melted Monterey Jack cheese, spicy jalapenos, red onion, and a chipotle sauce that awakens your senses.',
            'comprar7': 'Buy',
            'hamburguesa8': 'Turkey Burger with Fresh Avocado and Lettuce',
            'descrip8': 'A lighter option with a juicy turkey burger, fresh avocado, soft cheese, tomato, lettuce and a perfect combination of flavors and freshness.',
            'comprar8': 'Buy'
        },
        
        'es': {
            'hamburguesa1': 'Hamburguesa Clásica con Queso Cheddar',
            'descrip1': 'Una deliciosa hamburguesa clásica con jugosa carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente y un toque especial de mayonesa, todo entre pan suave y queso cheddar derretido.',
            'comprar1': 'Comprar',
            'hamburguesa2': 'Hamburguesa Vegetariana con Champiñones',
            'descrip2': 'Una opción vegetariana exquisita, con una jugosa hamburguesa de portobello a la parrilla, queso fundido, champiñones frescos salteados y una mezcla de vegetales frescos en un pan artesanal.',
            'comprar2': 'Comprar',
            'hamburguesa3': 'Hamburguesa Picante de Pollo con Guacamole',
            'descrip3': 'Sabor picante con pechuga de pollo sazonada, guacamole casero, queso pepper jack, cebolla morada, jalapeños y una explosión de sabores en cada bocado.',
            'comprar3': 'Comprar',
            'hamburguesa4': 'Hamburguesa BBQ con Tocino y Salsa Casera',
            'descrip4': 'Una combinación tentadora con tocino crujiente, carne de res a la parrilla, cebolla caramelizada, queso cheddar derretido y una salsa BBQ casera que realza su sabor.',
            'comprar4': 'Comprar',
            'hamburguesa5': 'Hamburguesa Hawaiana con Piña y Salsa Teriyaki',
            'descrip5': 'El toque tropical perfecto con una jugosa hamburguesa de carne de res, piña a la parrilla, queso suave, lechuga fresca y salsa teriyaki que te transportará a Hawai.',
            'comprar5': 'Comprar',
            'hamburguesa6': 'Hamburguesa Mediterránea con Aceitunas y Queso Feta',
            'descrip6': 'Un viaje culinario con carne de cordero sazonada, aceitunas kalamata, tomate fresco, pepino, lechuga crujiente y el distintivo sabor del queso feta.',
            'comprar6': 'Comprar',
            'hamburguesa7': 'Hamburguesa Mexicana con Jalapeños super picantes',
            'descrip7': 'Sabores auténticos mexicanos con carne sazonada, queso monterrey jack derretido, jalapeños picantes, cebolla morada y una salsa de chipotle que te despierta los sentidos.',
            'comprar7': 'Comprar',
            'hamburguesa8': 'Hamburguesa de Pavo con Aguacate Fresco y lechuga',
            'descrip8': 'Una opción más ligera con una jugosa hamburguesa de pavo, aguacate fresco, queso suave, tomate, lechuga y una combinación perfecta de sabores y frescura. ',
            'comprar8': 'Comprar',


        }
       

    };

    // Cambia el texto según el idioma seleccionado

    document.getElementById('hamburguesa1').innerText = textos[idioma]['hamburguesa1'];
    document.getElementById('descrip1').innerText = textos[idioma]['descrip1'];
    document.getElementById('comprar1').innerText = textos[idioma]['comprar1'];

    document.getElementById('hamburguesa2').innerText = textos[idioma]['hamburguesa2'];
    document.getElementById('descrip2').innerText = textos[idioma]['descrip2'];
    document.getElementById('comprar2').innerText = textos[idioma]['comprar2'];

    document.getElementById('hamburguesa3').innerText = textos[idioma]['hamburguesa3'];
    document.getElementById('descrip3').innerText = textos[idioma]['descrip3'];
    document.getElementById('comprar3').innerText = textos[idioma]['comprar3'];

    document.getElementById('hamburguesa4').innerText = textos[idioma]['hamburguesa4'];
    document.getElementById('descrip4').innerText = textos[idioma]['descrip4'];
    document.getElementById('comprar4').innerText = textos[idioma]['comprar4'];


    document.getElementById('hamburguesa5').innerText = textos[idioma]['hamburguesa5'];
    document.getElementById('descrip5').innerText = textos[idioma]['descrip5'];
    document.getElementById('comprar5').innerText = textos[idioma]['comprar5'];

    document.getElementById('hamburguesa6').innerText = textos[idioma]['hamburguesa6'];
    document.getElementById('descrip6').innerText = textos[idioma]['descrip6'];
    document.getElementById('comprar6').innerText = textos[idioma]['comprar6'];

    document.getElementById('hamburguesa7').innerText = textos[idioma]['hamburguesa7'];
    document.getElementById('descrip7').innerText = textos[idioma]['descrip7'];
    document.getElementById('comprar7').innerText = textos[idioma]['comprar7'];

    document.getElementById('hamburguesa8').innerText = textos[idioma]['hamburguesa8'];
    document.getElementById('descrip8').innerText = textos[idioma]['descrip8'];
    document.getElementById('comprar8').innerText = textos[idioma]['comprar8'];
}