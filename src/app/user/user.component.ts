import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
template:`<div class="container">
<form class="row g-3">
    <div class="col-md-6">
        <label for="inputfname" class="form-label">First Name</label>
        <input type="text" class="form-control" id="inputfname">
      </div>
      <div class="col-md-6">
        <label for="inputlname" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="inputlname">
      </div>
        
    <div class="col-md-12">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail">
    </div>
    <div><h2>Adress</h2></div>
    <div class="col-md-6">
        <label for="inputStreet" class="form-label">Street</label>
        <input type="text" class="form-control" id="inputStreet">
    </div>
    <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputStreet">
    </div>

    <div class="col-4">
      <label for="inputStad" class="form-label">Stad</label>
      <input type="text" class="form-control" id="inputStad">
    </div>  
    <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
    <div class="col-md-6">
        <label for="inputCountry" class="form-label">Country</label>
        <input type="text" class="form-control" id="inputZip">
      </div>

    
    <div class="col-12">
      <button type="submit" class="btn btn-secondary">Submit</button>
      <button type="button" class="btn btn-secondary">Cancel</button>
    </div>
  </form> `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
