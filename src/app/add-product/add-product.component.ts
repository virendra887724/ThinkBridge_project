import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  saveProductArray: any = [];
  productName: any;
  productDesc: any;
  productPrice: any;
  productQuantity: any;
  storeData: any
  editData: any
  statusValue: boolean = false

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem("editData") || '{}'));
    this.editData = JSON.parse(localStorage.getItem("editData") || '{}')
    if (this.editData != null) {
      this.statusValue = true
      this.productName = this.editData.productName
      this.productDesc = this.editData.productDesc
      this.productPrice = this.editData.productPrice
      this.productQuantity = this.editData.productQuantity
    }
  }

  newProductDetails: any;
  addProduct(productName: any) {
    localStorage.setItem("productName", this.productName)
    localStorage.setItem("productDesc", this.productDesc)
    localStorage.setItem("productPrice", this.productPrice)
    localStorage.setItem("productQuantity", this.productQuantity)
    if ((localStorage.getItem("productName") || localStorage.getItem("productDesc") || localStorage.getItem("productPrice") || localStorage.getItem("productPrice")) == 'undefined') {
      alert("Please fill all manadatory fields!")
    } else {
      this.saveProductArray = []
      this.productName = localStorage.getItem("productName")
      this.productDesc = localStorage.getItem("productDesc")
      this.productPrice = localStorage.getItem("productPrice")
      this.productQuantity = localStorage.getItem("productQuantity")

      var dataObj = {
        "productName": this.productName,
        "productDesc": this.productDesc,
        "productPrice": this.productPrice,
        "productQuantity": this.productQuantity
      }
      this.newProductDetails = dataObj


      if (localStorage.getItem("saveProductArray") === null || JSON.parse(localStorage.getItem("saveProductArray") || '{}').length === 0) {
        this.saveProductArray.push(dataObj)
        localStorage.setItem("saveProductArray", JSON.stringify(this.saveProductArray))
        alert("Product saved successfully!")
        this.router.navigate(['allProduct'])
      } else {
        this.storeData = JSON.parse(localStorage.getItem("saveProductArray") || '{}');
        var sameData: Boolean = false

        for (let i = 0; i < this.storeData.length; i++) {
          var element = this.storeData[i];
          if (element.productName == productName) {
            localStorage.setItem("saveProductArray", JSON.stringify(this.storeData))
            sameData = true;
            alert("This Data has already saved!")
            break;
          }
        }

        if (sameData) {
          var storeData = JSON.parse(localStorage.getItem("saveProductArray") || '{}')
          var newData = new Set(storeData)
          storeData = [...newData]
          console.log(storeData);
          localStorage.setItem("saveProductArray", JSON.stringify(storeData))
        } else {
          this.storeData.push(this.newProductDetails)
          localStorage.setItem("saveProductArray", JSON.stringify(this.storeData))
          alert("Product saved successfully!")
          this.router.navigate(['allProduct'])
        }
      }
    }
  }

}
