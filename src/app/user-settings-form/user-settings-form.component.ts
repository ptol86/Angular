import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-settings';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../data/data.service';
import {log} from 'util';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings: UserSettings = {...this.originalUserSettings};
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid)
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('succes ', result),
      error => console.log('error', error)
    );
  }

  onBlur(field: NgModel): void {
    console.log('onBlur: ', field.valid);
  }
}
