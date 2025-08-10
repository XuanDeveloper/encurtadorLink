import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  urlEncurtada = '';
  urlParaEncurtar = '';
  errorMessage = '';
  isLoading = false;

  encurtarUrl(urlParaEncurtar: string) {
    if (!urlParaEncurtar.trim()) {
      this.errorMessage = 'Por favor, digite uma URL válida';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    fetch('http://localhost:3000/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalUrl: urlParaEncurtar }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        this.urlEncurtada = `http://localhost:3000/api/${data.shortUrl}`;
        this.urlParaEncurtar = '';
      })
      .catch((error) => {
        console.error('Erro ao encurtar a URL:', error);
        this.errorMessage = 'Erro ao encurtar a URL. Tente novamente.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  redirecionarUrl(shortUrl: string) {
    if (!shortUrl) {
      this.errorMessage = 'URL encurtada não disponível';
      return;
    }
    window.open(shortUrl, '_blank');
  }

  copiarUrl() {
    if (this.urlEncurtada) {
      navigator.clipboard.writeText(this.urlEncurtada).then(() => {
        console.log('URL copiada para a área de transferência');
      });
    }
  }

  getUrlEncurtada() {
    return this.urlEncurtada;
  }
}
