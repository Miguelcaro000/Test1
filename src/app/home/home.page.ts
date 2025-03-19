import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { TerremotosService } from '../servicios/terremotos.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  terremotos: any[] = [];
  constructor(private loadingCtlr: LoadingController, private terremotoService: TerremotosService) {
    this.loadTerromotos();
  }


  async loadTerromotos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtlr.create({
      message: 'Loading',
      spinner: 'bubbles'
    });
    await loading.present();

    this.terremotoService.getUltimosTerremotos().subscribe(
      (data) => {
        loading.dismiss();
        this.terremotos.splice(0,this.terremotos.length);
        this.terremotos.push(...data.features);
        event?.target.complete();
      }
    )
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.loadTerromotos(event);
  }

  
  

}
