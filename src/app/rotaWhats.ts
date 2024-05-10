import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-redirect-whats',
  template: '' // Remova essa linha
})
export class RedirectWhatsComponent implements OnInit {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        const url = 'whatsapp://send?phone=1238333814'; // URL externa para redirecionamento
        if (this.isSafeUrl(url)) {
          window.location.href = url;
        } else {
          console.error('Tentativa de redirecionamento para uma URL não segura:', url);
        }
      } else {
        console.error('O redirecionamento não pode ser executado fora do ambiente do navegador.');
      }
  }

  private isSafeUrl(url: string): boolean {
    return url.startsWith('whatsapp://');
  }

}