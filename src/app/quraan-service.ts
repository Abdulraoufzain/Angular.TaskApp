import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TextInfo } from './info-quraan';
@Injectable({
  providedIn: 'root',
})
export class APIQuraan {
  constructor(private http: HttpClient) {}
  getAyah(surahNumber: number, verseNumber: number): Observable<TextInfo> {
    return this.http.get<TextInfo>(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak/${surahNumber}/${verseNumber}.json`
    );
  }
  getTafserArabic(
    surahNumber: number,
    verseNumber: number
  ): Observable<TextInfo> {
    return this.http.get<TextInfo>(
      `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafsir-muyassar/${surahNumber}/${verseNumber}.json`
    );
  }
  getTafserEnglish(
    surahNumber: number,
    verseNumber: number
  ): Observable<TextInfo> {
    return this.http.get<TextInfo>(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem/${surahNumber}/${verseNumber}.json`
    );
  }
}
