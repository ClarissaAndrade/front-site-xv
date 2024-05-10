import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-redirect-insta',
  template: '' // Remova essa linha
})
export class RedirectInstaComponent implements OnInit {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
 
    if (isPlatformBrowser(this.platformId)) {
        const url = 'https://www.instagram.com/comercioxvdenovembro?igsh=ZHRkb3duMHFxbTh2'; // URL externa para redirecionamento
        if (this.isSafeUrl(url)) {
          window.location.href = url;
        } else {
          console.log('Tentativa de redirecionamento para uma URL não segura:', url);
        }
      } else {
        console.log('O redirecionamento não pode ser executado fora do ambiente do navegador.');
      }
  }

  private isSafeUrl(url: string): boolean {
    return url.startsWith('https://');
  }
}