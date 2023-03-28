# angular

Instalacion

1. Descargar la ultima version de node: https://nodejs.org/es
2. npm install -g npm@latest
3. npm cache clean --force
4. npm set audit false
5. npm uninstall -g angular-cli
   npm uninstall -g @angular/cli
6. npm cache clean --force
7. npm install -g @angular/cli@latest

Crear un proyecto nuevo

1. ng new first-angular --defaults
2. meterse al proyecto que se creo desde la consola
3. ng serve
4. entrar desde el explorador a localhost:4200

Estructura de los ficheros:
Dentro de src:

- assets: hojas de estilo
- app: donde se hace mas el proyecto.
  eb app.components.ts se trae el decorador component que sirve para definir atributos y caracteristicas a la clase.
  El selector es a donde le apunta dentro del html index
  El tempateUrl es el contenido que se vea en la pagina que va en forma de html
  StyleUrls es la hoja de estilos

En export se exportan variables asi:
export class AppModule {
name_varaible:type_data = content
}

dentro del html para usar variables en el texto se pone{{"aca va el nombre de la variable"}}

Crear un componente:

1. Parar usando ctrl c
2. cls o clear
3. ng generate component
4. usar el componente y darle ng sere para iniciar otra vez
   dentro de ts ngOnInit() es un didmount
5. dentro del html se puede poner un if *ngIf o un for *ngFor

- Se pueden poner estilos asi:[style.color]="'white'" y pueden usarse terniarios
  siempre con nombres de colores se usan las comillas ''
