let product = {
  plainBurger: {
    name: 'Гамбургер простой',
    price: 10000,
    amount: 0,
    kcall: 500,
    get Summ() {
      return this.price * this.amount
    },
    get Kcall() {
      return this.kcall * this.amount;
    }
  },

  freshBurger: {
    name: 'Гамбургер Fresh',
    price: 20500,
    amount: 0,
    kcall: 1100,
    get Summ() {
      return this.price * this.amount
    },
    get Kcall() {
      return this.kcall * this.amount;
    }
  },

  freshCombo: {
    name: 'Fresh Combo',
    price: 31900,
    amount: 0,
    kcall: 1100,
    get Summ() {
      return this.price * this.amount
    },
    get Kcall() {
      return this.kcall * this.amount;
    }
  }

}

// Доп продукты

let extraProduct = {
  doubleMayonnaise: {
    name: 'Двойной майонез',
    price: 1000,
    kcall: 100
  },
  lettuce: {
    name: 'Салатный лист',
    price: 2000,
    kcall: 30
  },
  cheese: {
    name: 'Сыр',
    price: 2500,
    kcall: 150
  }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
  checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
  addCart = document.querySelector('.addCart'),
  receipt = document.querySelector('.receipt'),
  receiptWindow = document.querySelector('.receipt__window'),
  receiptOut = document.querySelector('.receipt__window-out'),
  receiptBtn = document.querySelector('.receipt__window-btn');

btnPlusOrMinus.forEach(function(item) {
  item.addEventListener('click', function () {
    plusOrMinus(this);
  })
})

function plusOrMinus(element) {
  // closest() - podkluchaetsya k blijayshemu zadannomu roditelyu.
  // getAttribute() - beret znacheniye u ukazannova abributa
  let parenId = element.closest('.main__product').getAttribute('id'),
    out = element.closest('.main__product').querySelector('.main__product-num'),
    price = element.closest('.main__product').querySelector('.main__product-price span'),
    kcall = element.closest('.main__product').querySelector('.main__product-kcall span');

    if(element.getAttribute('data-symbol') == '+'){
      product[parenId].amount++
    } else if (element.getAttribute('data-symbol') == '-' && product[parenId].amount > 0){
      product[parenId].amount--
    }

    out.innerHTML = product[parenId].amount;
    price.innerHTML = product[parenId].Summ;
    kcall.innerHTML = product[parenId].Kcall;
}