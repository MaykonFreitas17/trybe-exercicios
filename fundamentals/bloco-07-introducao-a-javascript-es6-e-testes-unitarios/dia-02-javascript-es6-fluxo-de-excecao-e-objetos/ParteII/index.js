const order = {

	// Propriedade 1
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },

	// Propriedade 2
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },

    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },

    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },

	// Propriedade 3
  payment: {
    total: 60,
  },
};


/**
 * 	Agora você vai fazer alguns exercícios de fixação.
 *  1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
 * 		-> Note que o parâmetro da função já está sendo passado na chamada da função.
 * 
 *  2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
 * 		-> Modifique o nome da pessoa compradora.
 * 		-> Modifique o valor total da compra para R$ 50,00. */

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
	const deliveryPerson = Object.values(order.order);
	const address = Object.values(order.address);
	return `Olá ${deliveryPerson[2].deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber},  ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
	const deliveryPerson = Object.values(order.order);
	return `Olá ${deliveryPerson[2].deliveryPerson}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00`;
};

console.log(orderModifier(order));
