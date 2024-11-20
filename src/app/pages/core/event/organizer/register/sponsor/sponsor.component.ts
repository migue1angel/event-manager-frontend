import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss'],
})
export class SponsorComponent implements OnInit {
  sponsorForm!: FormGroup;
  form!: FormGroup;

  private selectedImageBase64: string = '';

  constructor(private fb: FormBuilder) {
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
      photo: [''], // Campo para la imagen en Base64
    });
  }

  // Método para manejar la selección de la imagen
  onSelectImage(event: any) {
    const file = event.files[0]; // Seleccionamos el primer archivo subido
    const reader = new FileReader();

    reader.onload = () => {
      this.selectedImageBase64 = reader.result as string; // Convertir a Base64
      this.sponsorForm.get('photo')?.setValue(this.selectedImageBase64); // Guardar en el formulario
    };

    reader.readAsDataURL(file); // Leer archivo como Base64
  }

  // Limpiar los datos de imagen
  onClear() {
    this.sponsorForm.get('photo')?.setValue(''); // Limpiar campo de foto
    this.selectedImageBase64 = ''; // Resetear variable de imagen
  }

  // Agregar un nuevo sponsor
  addSponsor() {
    if (this.sponsorForm.valid) {
      this.sponsors.push(this.fb.group(this.sponsorForm.value)); // Agregar sponsor al array
      this.sponsorForm.reset(); // Limpiar formulario
      this.selectedImageBase64 = ''; // Limpiar imagen seleccionada
    }
  }

  // Editar sponsor existente
  editSponsor(index: number) {
    const sponsor = this.sponsors.at(index); // Obtener sponsor seleccionado
    this.sponsorForm.patchValue(sponsor.value); // Cargar datos al formulario
    this.sponsors.removeAt(index); // Eliminar de la lista
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onSubmit2(file: any) {
    console.log(file);
    console.log(file.target.files);
  }

  filetest: any;
  takefile(event: any) {
    this.filetest = event.target.files[0];
    // console.log(event.target.files[0]);
    console.log(this.filetest);
  }
  // Eliminar sponsor
  removeSponsor(index: number) {
    this.sponsors.removeAt(index); // Quitar del array
  }

  // Obtener la lista de sponsors
  get sponsors(): FormArray {
    return this.form.get('sponsors') as FormArray;
  }
}
