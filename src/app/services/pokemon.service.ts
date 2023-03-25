import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';
import { lastValueFrom, of } from 'rxjs';

/**
 * 
https://pokeapi.co/api/v2/pokemon/1/
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281
https://www.blobmaker.app/
https://rxjs.dev/
https://fonts.google.com/

 */
interface poke {
  name:string,
  url:string
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons:poke[]=[];
  offset = 0;
  limit = 150;

  constructor(
private http: HttpClient,
private alertService: AlertService

  ) { }

private getAPI(api:string){
  let test = '';
  if(!environment.prdMode) test = environment.test;
  return environment.pokeAPI+test+ api;  
}

private  getPokemons(){
  let URL =  this.getAPI(environment.getPokemonsPagination);
      URL  = URL + environment.offset + this.offset + environment.limit + this.limit;
    return this.http.get<any[]>(URL);
  }

async  syncGetPokemons(){

   of(this.getPokemons()).subscribe( async (pokemons) =>{
  let pokemonsArray:any =  await lastValueFrom(pokemons);
      this.pokemons = pokemonsArray.results
  }, error =>{
    this.alertService.presentMessageAlert('Pokemon', 'Error', JSON.stringify(error)) 
    
  });
 
  
/**
 *   this.getPokemons().subscribe( (pokemons:any) =>{
    next:
    this.pokemons = pokemons.results;
    console.log('pokemons', this.pokemons)
  }, error =>{

   this.alertService.presentMessageAlert('Pokemon', 'Error', JSON.stringify(error)) 
  })
 */
}

syncGetPokemonToPromise(){
  return  lastValueFrom(this.getPokemons())
}


}
