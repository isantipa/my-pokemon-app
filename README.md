# Nom del Projecte

my-pokemon-app, prova técnica per isKra.

## Solució Implementada

La solució implementada es basa en una aplicació React que mostra una llista de pokémons consumint la API pública de PokeAPI.

A continuació, describirem alguns dels elements clau del projecte:

### Tecnologies Utilitzades

- **React**: Librería per construir l'interfície d'usuari.
- **Axios**: Utilitzat per realitzar crides API de manera eficient.
- **React Router Dom**: Librería per gestionar les rutes de l'aplicació.

### Components Principals

1. **App.jsx**

   - Estableix les rutes principals del projecte, incloent la pàgina d'inici i la pàgina de detalls del pokémon.
   - Implementa un `ViewModeProvider` que permet canviar entre les vistes de llista i graella.

2. **Home.jsx**

   - Conté la pàgina d'inici, que mostra una llista de pokémons junt amb un commutador de vista de llista/graella.
   - Es podria haver establert tant el GridViewToggle com el PokemonList a Home.jsx, però al separar-los en components fa que l'aplicació pugui ser més modular.

3. **PokemonList.jsx**

   - Fa servir `axios` per a fer una crida a la API i obtenir una llista de pokémons. En aquest cas, he utilitzat Axios en lloc de Fetch, ja que inicialment ja implementa un gestor d'errors i sol ser més llegible.
   - Mostra els pokémons en una llista o una graella, depenent de l'estat actual del mode de vista.
   - S'encarrega de pintar 20 Pokémon i 5 pàginas, amb l'ajuda del useEffect, monitoritza l'estat per a poder-lo guardar i així tornar quan s'utilitza el botó de ReturnButton.

### Context

- **ViewModeContext**
  - Un context que proveeix un estat global per a controlar el mode de vista (llista o graella) a través de l'aplicació.

### Pàgines

1. **PokemonPage.jsx**

   - Mostra els detalls d'un pokémon específic, que s'obtenen cridant a la API de PokeAPI.
     -Torno a fer servir un altre component, en aquest cas PokemonCard.jsx per fer més modular el projecte en cas de voler afegir altres coses.

### Funcionalitats Addicionals

1. **GridViewToggle**

   - Un commutador que permet canviar entre la vista de llista i la vista de graella en la pàgina d'inici.

2. **ReturnButton**

   - Un botó que permet tornar a la pàgina anterior, implementat utilitzant `useNavigate` de `react-router-dom`.

3. **Pagination**

   - Un parell de botóns que permeten navegar entre les diferents paginacións del llistat de pokemon, en aquest cas 5 pags.

### Gestió d'Estils

- He utilitzat CSS per a estilizar els components i assegurar una presentació visual agradable i moderna.

### Maneig d'Errors

- He implementat maneig d'errors bàsic a les crides API per a garantir que l'aplicació no falli en cas d'errors de xarxa.

## Com executar el projecte

Per a executar el projecte en el teu entorn local, segueix els passos a continuació:

### Prerequisits

- Node.js (versió 14 o superior)
- npm (versió 6 o superior)

### Instruccions

1. **Clona el repositori**

   Obrir una terminal o un terminal de comandaments i executar la següent comanda per a clonar el repositori:

   ```sh
   git clone https://github.com/isantipa/my-pokemon-app

   ```

2. **Instala dependències**

   Una vegada clonat el repositori, navega fins al directori del projecte i executa la següent comanda per a instal·lar totes les dependències necessàries:

   cd my-pokemon-app
   npm install

3. **Inicia l'aplició**

   Ara pots iniciar l'app amb la següent comanda:

   npm start

   L'app ara será accesible des del navegador a la la url indicada a la terminal (per norma http://localhost:3000/)
