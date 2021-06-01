import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  getSavedProduct: any

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.getSavedProduct = localStorage.getItem("saveProductArray")
  }

  displayedColumns: string[] = ['productName', 'productDesc', 'productPrice', 'productQuantity', 'editProduct', 'deleteProduct'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addProduct() {
    localStorage.removeItem("editData")
    this.router.navigate(['addProduct'])
  }

  onEditClick(data: any) {
    console.log(data);
    localStorage.setItem("editData", JSON.stringify(data))
    this.router.navigate(['addProduct'])
  }

  dataValue: any
  onDeleteClick(data: any) {
    console.log(data);
    this.dataValue = JSON.parse(localStorage.getItem("mergedData") || '{}')
    for (let i = 0; i < this.dataValue.length; i++) {
      const element = this.dataValue[i];
      console.log(element);
      if (data.productName == element.productName) {
        localStorage.removeItem(JSON.stringify(element(i)))
      }
    }
    console.log(this.dataValue);

  }
}

export interface PeriodicElement {
  productName: any;
  productDesc: number;
  productPrice: any;
  productQuantity: number;
}

var ELEMENT_DATA: PeriodicElement[] = [
  { productName: 'Hydrogen', productDesc: 1.0079, productPrice: 'H', productQuantity: 2 },
  { productName: 'Helium', productDesc: 4.0026, productPrice: 'He', productQuantity: 5 },
  { productName: 'Lithium', productDesc: 6.941, productPrice: 'Li', productQuantity: 3 },
  { productName: 'Beryllium', productDesc: 9.0122, productPrice: 'Be', productQuantity: 22 },
  { productName: 'Boron', productDesc: 10.811, productPrice: 'B', productQuantity: 24 },
  { productName: 'Carbon', productDesc: 12.0107, productPrice: 'C', productQuantity: 12 },
  { productName: 'Nitrogen', productDesc: 14.0067, productPrice: 'N', productQuantity: 8 },
  { productName: 'Oxygen', productDesc: 15.9994, productPrice: 'O', productQuantity: 2 },
  { productName: 'Fluorine', productDesc: 18.9984, productPrice: 'F', productQuantity: 3 },
  { productName: 'Neon', productDesc: 20.1797, productPrice: 'Ne', productQuantity: 7 },
  { productName: 'Sodium', productDesc: 22.9897, productPrice: 'Na', productQuantity: 5 },
  { productName: 'Magnesium', productDesc: 24.305, productPrice: 'Mg', productQuantity: 9 },
  { productName: 'Aluminum', productDesc: 26.9815, productPrice: 'Al', productQuantity: 1 },
  { productName: 'Silicon', productDesc: 28.0855, productPrice: 'Si', productQuantity: 2 },
  { productName: 'Phosphorus', productDesc: 30.9738, productPrice: 'P', productQuantity: 2 },
  { productName: 'Sulfur', productDesc: 32.065, productPrice: 'S', productQuantity: 2 },
  { productName: 'Chlorine', productDesc: 35.453, productPrice: 'Cl', productQuantity: 11 },
  { productName: 'Argon', productDesc: 39.948, productPrice: 'Ar', productQuantity: 31 },
  { productName: 'Potassium', productDesc: 39.0983, productPrice: 'K', productQuantity: 32 },
  { productName: 'Calcium', productDesc: 40.078, productPrice: 'Ca', productQuantity: 3 },
];
console.log(ELEMENT_DATA);

var newArray: any = []
var getSavedProduct: any

getSavedProduct = JSON.parse(localStorage.getItem("saveProductArray") || '{}')

for (let i = 0; i < getSavedProduct.length; i++) {
  const element = getSavedProduct[i];
  console.log(element);

  newArray = ELEMENT_DATA.push(element)
}

localStorage.setItem("mergedData", JSON.stringify(ELEMENT_DATA))
localStorage.removeItem("saveProductArray")

