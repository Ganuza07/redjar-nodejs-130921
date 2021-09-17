
// for (let index = 0; index < 10; index++) {
//     console.log('Ej');
// }

// const valor = NaN;

// if (valor) {
//     console.log('El valor es truthy');
// } else {
//     console.log('El valor es falsy');
// }

// const objeto1 = { attr: { valor: 'HOLA'} };
// console.log(objeto1.attr.valor);


// const objeto2 = { attr: { } };
// console.log(objeto2.attr.aaadsadadsadsadsasdasdasdas);

// const objeto3 = {  };
// console.log(objeto3.attr.valor);

// const objeto4 = { attr: {valor: 'VALOR', fn: () => 'Valor de fn'} };
// console.log(objeto4 && objeto4.attr && objeto4.attr.valor);
// console.log(objeto4?.attr?.fn());

// let valor1 = '';
// console.log(valor1 || 'valor-por-defecto');

// let valor2 = '';
// let respuesta = (valor2 ? valor2 : 'es falsy');
// console.log(respuesta);

// -----------------------------------------------------------------------------------------------------------------
// 16-09-21

// function myfn() {
//     console.log("it works");
// }

// const suma = (a, b) => {
//     console.log(a, b);
//     return a + b
// }

// const sumaShortHand = (a, b) => a + b;

// function no tiene contexto
// arrow tiene contexto

// callback
// const fnWithCallback = (callback) => {
//     callback()
// }

// fnWithCallback(() => suma(4, 5))

// objects

// const loguear = () => console.log('log');
// const edad = 26;
// const valor = 423;

// const curso = {
//     nombre: 'Curso',
//     edad,
//     valor,
//     loguear,
//     entradas: [1,2,3,4,5,6],
//     obj2: {
        
//     },
//     calcularTotal: () => curso.edad * curso.valor // si no paso argumentos, () puede ser _
// }

// console.log('Object.keys', Object.keys(curso));
// console.log('Object.values', Object.values(curso));
// console.log('Object.keys', Object.entries(curso));

// -----------------------------------------------------------------------------------------------------------------
// 17-09-21

const originalUsers = [
    {
        "id": 1,
        "name": "nombre"
    },
    {
        "id": 2,
        "name": "apellido"
    }
]

const originalPosts = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 2,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 2,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
            null,
        {
            "userId": 1,
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        }
    ];

    // const encontrado = originalPosts.find(post => post?.id === 8);
    // console.log(encontrado);


    // ME FALLA ------------------------------------------ <<----------------
    // const filtrado = originalPosts.filter(post => {
    //     post?.id > 7;
    // })
    // console.log(filtrado);

    // const word = 'sunt';
    // const desiredPosts = originalPosts.filter(post => {
    //     const titleIncluded = post?.title?.includes(word);
    //     const bodyIncluded = post?.body?.includes(word);
    //     return (titleIncluded || bodyIncluded);
    // })
    // console.log(desiredPosts);

    // const transformedPosts = originalPosts.map(post => {
    //     const user = originalUsers.find(user => user?.id === post.userId);
    //     return {
    //         title: post?.title,
    //         userName: user?.name
    //     }
    // })