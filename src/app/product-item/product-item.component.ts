import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  image:string;
  name:string;
  description:string;
  rating:number;
  link:string;
  img:string[];
  i:number;
  constructor() { }

   ngOnInit():void {
      this.name='Apple Watch Series 4';
      this.image=   'https://ae01.alicdn.com/kf/H83be8a46c1f94d90a2ba176d34eeaa31o/Stainless-Steel-Strap-for-Apple-Watch5-4-40mm-44mm-Band-Metal-Links-Bracelet-IWatch-Strap-for.jpg_220x220xz.jpg_.webp';
      this.description='Ремешок из нержавеющей стали для Apple Watch 5 4 40 мм 44 мм браслет с металлическими звеньями IWatch ремешок для Apple Watch серии 1 2 3 42 мм 38 мм';
      this.rating=5.0;
      this.link='https://aliexpress.ru/af/applewtch.html?d=y&origin=n&SearchText=applewtch&catId=0&initiative_id=SB_20200214205843';
  }
  ASelect():void {
      this.name='Apple Watch Series 4';
      this.image=   'https://ae01.alicdn.com/kf/H83be8a46c1f94d90a2ba176d34eeaa31o/Stainless-Steel-Strap-for-Apple-Watch5-4-40mm-44mm-Band-Metal-Links-Bracelet-IWatch-Strap-for.jpg_220x220xz.jpg_.webp';
      this.description='Ремешок из нержавеющей стали для Apple Watch 5 4 40 мм 44 мм браслет с металлическими звеньями IWatch ремешок для Apple Watch серии 1 2 3 42 мм 38 мм';
      this.rating=5.0;
      this.link='https://aliexpress.ru/af/applewtch.html?d=y&origin=n&SearchText=applewtch&catId=0&initiative_id=SB_20200214205843';
  }
   Change():void{
     this.image=this.img[1];
   }
  ISelect():void {
      this.name='Iphone7+';
       this.image=   'https://ae01.alicdn.com/kf/HTB1fM4nakomBKNjSZFqq6xtqVXaH/Apple-iPhone-7-Plus-iPhone-7-3GB-RAM-32-128GB-256GB-ROM-IOS-10-Cell-Phone.jpg_220x220xz.jpg_.webp';
      
      this.description='Apple iPhone 7 Plus iPhone 7 3 Гб RAM 32/128 ГБ/256 ГБ ROM IOS 10 Мобильный телефон 12.0MP камера четырехъядерный отпечаток пальца 12MP 2910mA';
      this.rating=4.8;
      this.link='https://aliexpress.ru/item/32854844856.html?spm=a2g0o.productlist.0.0.617e2652ZqsDXA&algo_pvid=59f18652-d1c8-4bda-91d1-0e9d6987bfd4&algo_expid=59f18652-d1c8-4bda-91d1-0e9d6987bfd4-8&btsid=0ab6d67915817432711062836e4a67&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
  }
  SSelect():void
  {
    this.name='Samsung9';
      this.image=   'https://ae01.alicdn.com/kf/Hf9cb1bab6a5b4691af4c18163fb4973bC/Samsung-Galaxy-S9-Plus-S9-G965U-Original-Unlocked-LTE-Cell-Phone-Octa-Core-6-2-Dual.jpg_220x220xz.jpg_.webp';
      this.description='Samsung Galaxy S9 Plus S9 + G965U Оригинальный разблокированный мобильный телефон LTE Восьмиядерный 6,2 "двойной 12 МП 6 ГБ ОЗУ 64 Гб ПЗУ NFC Snapdragon 845';
      this.rating=4.8;
      this.link='https://aliexpress.ru/item/33001704377.html?spm=a2g0o.productlist.0.0.366b44958uxsxY&algo_pvid=d19515ab-0364-4d9a-b158-8dfe9a8e2bbf&algo_expid=d19515ab-0364-4d9a-b158-8dfe9a8e2bbf-8&btsid=0ab6d67915817433953241845e4a67&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
  }

  XSelect():void
  {
    this.name='Xia';
      this.image=   'https://cdn-files.kimovil.com/default/0003/60/thumb_259834_default_big.jpeg';
      this.description='Мобильный телефон Xiaomi Redmi 8 с глобальной прошивкой, 3 Гб ОЗУ, 32 Гб ПЗУ, Восьмиядерный процессор Snapdragon 439, аккумулятор 6,22 дюйма, 5000 мАч, двойная камера 12 МП';
      this.rating=4.9;
      this.link='https://aliexpress.ru/item/4000224686482.html?spm=a2g0o.productlist.0.0.1d592a552GqdsI&algo_pvid=7ca0c1aa-b074-4efd-a831-3693c3fd1148&algo_expid=7ca0c1aa-b074-4efd-a831-3693c3fd1148-8&btsid=0ab6fa8115817422238778284e5675&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
}
 BrasSelect():void
  {
    this.name='Xia';
      this.image=   'https://ae01.alicdn.com/kf/HTB1mLBQkv5TBuNjSspmq6yDRVXam/Natural-Matte-Black-Lava-Volcanic-Stone-Paw-Print-Charm-Bracelet-Homme-Femme-Pet-Memorial-Cat-Dog.jpg_220x220xz.jpg_.webp';
      this.description='Натуральная матовая черная вулканическая лава подвеска с принтом в виде лапы браслет Homme Femme Pet Memorial Cat Dog Lovers ювелирные изделия браслеты подарки';
      this.rating=4.9;
      this.link='https://aliexpress.ru/item/32862878463.html?spm=a2g0o.productlist.0.0.5c50bfb07pfwLN&s=p&algo_pvid=9659e016-67ab-4296-8711-78fa0eb36e66&algo_expid=9659e016-67ab-4296-8711-78fa0eb36e66-7&btsid=0ab6f8ad15817441697102226ee284&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
}
BagSelect():void
  {
    this.name='Bag';
      this.image=   'https://ae01.alicdn.com/kf/H62dbf39603824316987a200a27edc1b5K/Women-Corduroy-Shopping-Bag-Female-Canvas-Cloth-Shoulder-Bag-Environmental-Storage-Handbag-Reusable-Foldable-Eco-Grocery.jpg_220x220xz.jpg_.webp';
      this.description='Женская Вельветовая хозяйственная сумка, Женская тканевая сумка через плечо, Экологичная сумка для хранения, многоразовая складная эко-продуктовая сумка';
      this.rating=4.9;
      this.link='https://aliexpress.ru/item/32981688166.html?spm=a2g0o.productlist.0.0.9f91197bXLeSFJ&algo_pvid=84cda1fd-a3b2-4940-a07d-72922adf42a2&algo_expid=84cda1fd-a3b2-4940-a07d-72922adf42a2-8&btsid=0ab6f82c15817474599133183e9c55&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
}
CaseSelect():void
  {
    this.name='Case';
      this.image=   'https://ae01.alicdn.com/kf/HTB1h15tXiDxK1RjSsphq6zHrpXaK/Coque-Cover-5-77For-Samsung-Galaxy-S9-Case-For-Samsung-Galaxy-S9-S8-Plus-Duos-Dual.jpg_220x220xz.jpg_.webp';
      this.description='Чехол 5,77для Samsung Galaxy S9, чехол для Samsung Galaxy S9 S8 Plus Duos Dual Sm G950F G955 G955F G965F, чехол';
      this.rating=5.0;
      this.link='https://aliexpress.ru/item/32924542762.html?spm=a2g0o.productlist.0.0.31bf7bfdnVzY1h&s=p&algo_pvid=2e81d830-1327-4d19-87cd-a47fd972845f&algo_expid=2e81d830-1327-4d19-87cd-a47fd972845f-4&btsid=0ab6f82c15817475629388333e9c55&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
}
RingSelect():void
  {
    this.name='Ring';
      this.image=   'https://ae01.alicdn.com/kf/HTB1aCB9a6zuK1RjSsppq6xz0XXaM/Hot-New-Selling-Temperament-Rhinestones-Twisted-Leaves-Wishful-Flowers-Open-Ring-Index-Finger-Ring-Female-Rings.jpg_220x220xz.jpg_.webp';
      this.description='Хит продаж, новинка, темпераментные стразы, витые листья, желаемые цветы, Открытое кольцо, кольцо на указательный палец, женские кольца для женщин, Anel';
      this.rating=4.0;
      this.link='https://aliexpress.ru/item/32973735657.html?spm=a2g0o.productlist.0.0.1e8d2cbdYZuYsa&algo_pvid=ff5ce104-19c6-4a61-841e-fe57f46945d0&algo_expid=ff5ce104-19c6-4a61-841e-fe57f46945d0-18&btsid=0ab6f82c15817481238758544e9ca0&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
  }
  
  CupSelect():void
  {
      this.name='Ring';
      this.image=   'https://ae01.alicdn.com/kf/H00af3e6c53d0478698b5019f3444fec7L/304-Stainless-Steel-Double-Side-Copper-Plated-Coffee-Mug-Beer-Mug-Beer-Cup.jpg_220x220xz.jpg_.webp';
      this.description='304 нержавеющая сталь двухсторонняя медная покрытая Кофейная Кружка Пивная Кружка пивная чашка';
      this.rating=0.0;
      this.link='https://aliexpress.ru/item/4000611979856.html?spm=a2g0o.productlist.0.0.18c3197bnZL7Iv&s=p&algo_pvid=c22c000d-a6ab-4734-839d-7469f6eab27d&algo_expid=c22c000d-a6ab-4734-839d-7469f6eab27d-0&btsid=0ab6f82c15817482642411082e9ca0&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
  }
  ShirtSelect():void
  {
      this.name='Shirt';
      this.image=   'https://ae01.alicdn.com/kf/HTB1cbS2bkY2gK0jSZFgq6A5OFXa3/Women-Lace-Blouse-Elegant-Formal-Embroidery-Long-Sleeve-White-Shirts-Office-Lady-Flower-Hollow-Fashion-Female.jpg_220x220xz.jpg_.webp';
      this.description='Женская кружевная блузка элегантная формальная вышивка с длинным рукавом белые рубашки офисные женские Цветочные Полые Модные Женская сорочка ОдеждаЖенская кружевная блузка элегантная формальная вышивка с длинным рукавом белые рубашки офисные женские Цветочные Полые Модные Женская сорочка Одежда';
      this.rating=4.8;
      this.link='https://aliexpress.ru/item/4000032211275.html?spm=a2g0o.productlist.0.0.2880d822xx9GMV&algo_pvid=bb555868-9c1a-4dc4-9358-8fd5d5dad1fd&algo_expid=bb555868-9c1a-4dc4-9358-8fd5d5dad1fd-12&btsid=0ab6f82c15817484912318226e9ca0&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
  }
}
