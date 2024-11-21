import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

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

  sponsorForm!: FormGroup;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.buildForm();
    this.buildSponsorForm();
  }

  ngOnInit(): void {}

  // Construir el formulario principal
  buildForm() {
    this.form = this.fb.group({
      sponsors: this.fb.array([]), // Lista de sponsors
    });
  }

  // Construir formulario para agregar sponsors
  buildSponsorForm() {
    this.sponsorForm = this.fb.group({
      name: ['', Validators.required],
      file: [null, Validators.required], // Campo para el archivo, ahora es requerido
    });
  }

  // Método para manejar la selección del archivo
  onSelectFile(event: any) {
    const file = event.files[0]; // Seleccionamos el primer archivo subido
    this.sponsorForm.get('file')?.setValue(file); // Guardar el archivo directamente en el formulario
    this.sponsorForm.get('file')?.updateValueAndValidity(); // Actualizar la validez del campo
  }

  // Limpiar los datos del archivo
  onClear() {
    this.sponsorForm.get('file')?.setValue(null); // Limpiar campo de archivo
    this.sponsorForm.get('file')?.updateValueAndValidity(); // Actualizar la validez del campo
    this.fileUpload.clear(); // Limpiar el componente FileUpload
  }

  // Agregar un nuevo sponsor
  addSponsor() {
    if (this.sponsorForm.valid) {
      this.sponsors.push(this.fb.group(this.sponsorForm.value)); // Agregar sponsor al array
      this.sponsorForm.reset(); // Limpiar formulario
      this.fileUpload.clear(); // Limpiar el componente FileUpload
      this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Sponsor agregado correctamente'});
    } else {
      // Mostrar mensaje de error si el formulario no es válido
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Por favor, complete todos los campos requeridos'});
      // Marcar los campos como tocados para mostrar los errores de validación
      this.sponsorForm.markAllAsTouched();
    }
  }

  // Obtener URL temporal para mostrar la imagen
  getFileUrl(file: File): string {
    return file ? URL.createObjectURL(file) : '';
  }

  // Editar sponsor existente
  editSponsor(index: number) {
    const sponsor = this.sponsors.at(index); // Obtener sponsor seleccionado
    this.sponsorForm.patchValue(sponsor.value); // Cargar datos al formulario
    this.sponsors.removeAt(index); // Eliminar de la lista
    if (sponsor.value.file) {
      this.fileUpload.files = [sponsor.value.file];
    }
  }

  // Eliminar sponsor
  removeSponsor(index: number) {
    this.sponsors.removeAt(index); // Quitar del array
    this.messageService.add({severity:'info', summary: 'Información', detail: 'Sponsor eliminado'});
  }

  // Obtener la lista de sponsors
  get sponsors(): FormArray {
    return this.form.get('sponsors') as FormArray;
  }

  // Formatear el tamaño del archivo
  formatSize(bytes: number) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
