import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisteredUser } from 'src/models/registerForm.model';


@Component({
  selector: 'app-user-form-register',
  templateUrl: './user-form-register.component.html',
  styleUrls: ['./user-form-register.component.scss']
})
export class UserFormRegisterComponent implements OnInit {
  registerForm: FormGroup;
  petValues: string[] = ['dog', 'cat', 'other'];

  // Regular Expression Patterns for Form Validators
  passRegExp = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&]).*$';
  phoneRegExp =  '\(\\\(?\(\\\+|00\)?48\\\)?\)?[ -]?\\d{3}[ -]?\\d{3}[ -]?\\d{3}(?!\\w)';


  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    console.log('SUCCESS \n\n' + JSON.stringify(this.registerForm.value));
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      phone: ['', [
        Validators.pattern(this.phoneRegExp),
        Validators.required
        ]
      ],
      password: ['', [
        Validators.minLength(8),
        Validators.pattern(this.passRegExp),
        Validators.required
        ]
      ],
      confirmPassword: ['', ],
      pet: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: ['', [
          Validators.required,
          Validators.pattern('^\\d+'),
          ]
        ],
        flatNo: ['', Validators.pattern('^\\d+')],
      }),
      consents: this.fb.group({
        newsletter: [false],
        sms: [false],
      }),
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  // Custom validator to check that two fields match
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public cleanForm(formGroup: FormGroup) {
    // Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).value.trim());
    this.onSubmit();
  }

}
