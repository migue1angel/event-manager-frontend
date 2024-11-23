import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { SponsorEnum } from '../../../../../../shared/enums/fields.enum';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss'],
  providers: [MessageService]
})
export class SponsorComponent implements OnInit {
clearCallback() {
throw new Error('Method not implemented.');
}
  @ViewChild('fileUpload') fileUpload!: FileUpload;

  protected sponsorForm!: FormGroup;
  protected form!: FormGroup;
  protected readonly formBuilder = inject(FormBuilder)
  protected readonly messageService = inject(MessageService);
  protected SponsorEnum = SponsorEnum;
  

  constructor() {
    this.buildForm();
    this.buildSponsorForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = this.formBuilder.group({
      sponsors: this.formBuilder.array([]), 
    });
  }

  buildSponsorForm() {
    this.sponsorForm = this.formBuilder.group({
      name: ['', Validators.required],
      file: [null, Validators.required],
    });
  }

  onSelectFile(event: any) {
    const file = event.files[0];
    this.sponsorForm.get('file')?.setValue(file);
    this.sponsorForm.get('file')?.updateValueAndValidity(); 
  }

  onClear() {
    this.sponsorForm.get('file')?.setValue(null);
    this.sponsorForm.get('file')?.updateValueAndValidity(); 
    this.fileUpload.clear();
  }

  addSponsor() {
    if (this.sponsorForm.valid) {
      this.sponsors.push(this.formBuilder.group(this.sponsorForm.value));
      this.sponsorForm.reset(); 
      this.fileUpload.clear(); 
      this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Sponsor agregado correctamente'});
    } else {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Por favor, complete todos los campos requeridos'});
      this.sponsorForm.markAllAsTouched();
    }
  }

  getFileUrl(file: File): string {
    return file ? URL.createObjectURL(file) : '';
  }

  editSponsor(index: number) {
    const sponsor = this.sponsors.at(index); // Obtener sponsor seleccionado
    this.sponsorForm.patchValue(sponsor.value); // Cargar datos al formulario
    this.sponsors.removeAt(index); // Eliminar de la lista
    if (sponsor.value.file) {
      this.fileUpload.files = [sponsor.value.file];
    }
  }

  removeSponsor(index: number) {
    this.sponsors.removeAt(index); // Quitar del array
    this.messageService.add({severity:'info', summary: 'Información', detail: 'Sponsor eliminado'});
  }

  get sponsors(): FormArray {
    return this.form.get('sponsors') as FormArray;
  }

  get nameField (): AbstractControl{
    return this.sponsorForm.controls['name'];
  }

  get fileField (): AbstractControl{
    return this.sponsorForm.controls['file']
  }

  formatSize(bytes: number) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
