import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from '../../../../core/services/loading.service';
import { Home } from '../home/home';

@Injectable()
export class HomeService {
  home: Home[] = [];

  constructor(private loadingService: LoadingService) {}

  getHome() {
    this.loadingService.setIsLoading(true);
    const home: Home[] = [
      { id: 1, name: 'Malvina' },
      { id: 2, name: 'Graciela' },
      { id: 3, name: 'Auricular' }
    ];
    return of(home).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  createProduct(data: Home) {
    this. home= [...this.home, { ...data, id: this.home.length + 1 }];
    return this.getProducts();
  }

  deleteProductById(id: number) {
    this.home = this.home.filter((el) => el.id !== id);
    return this.getProducts();
  }

  updateProductById(id: number, data: Home) {
    this.home = this.home.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getProducts();
  }

  // Suponiendo que tienes una función para obtener los productos
  private getProducts(): Home[] {
    return this.home;
  }
}
