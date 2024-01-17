import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public title = 'teste';

  public teams = [
    {value: 1, viewValue: 'Ataque'},
    {value: 2, viewValue: 'Meio Campo'},
    {value: 3, viewValue: 'Defesa'},
  ];

  public companys = [
    {value: 1, viewValue: 'Feng'},
    {value: 2, viewValue: 'Golden Goal'},
    {value: 3, viewValue: 'Timmo'},
  ]

  public leaders = [
    {value: 1, viewValue: 'Raphael Marmute'},
    {value: 2, viewValue: 'Digão'},
    {value: 3, viewValue: 'Igão'},
  ]

  private mockedUser: any = null;

  public formGroup: FormGroup = new FormGroup({});
  panelColor = new FormControl('red');

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.setFormGroup()
    console.log(this.formGroup.getRawValue());
    setInterval(() => {
      console.log(this.formGroup.getRawValue())
    }, 3000)

  }

  setFormGroup() {

    this.formGroup = this.formBuilder.group({
      team: [ this.mockedUser ? this.mockedUser?.team.id : ''],
      company: [ this.mockedUser ? this.mockedUser?.company.id : '' ],
      leader: [ this.mockedUser ? this.mockedUser?.leader.id : '' ],
    })

  }

}
