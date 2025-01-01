import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Expertise,
  PersonalInfo,
  ProfileData,
  Projects,
} from './models/ProfileData.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadData } from './states/profile.actions';
import { TestComponent } from "./test/test.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TestComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'personal-website';
  profileData$: Observable<ProfileData>;
  projectsData?: Projects;
  personalInfo?: PersonalInfo;
  skills: Expertise[] = [];
  private subscription = new Subscription();

  constructor(private store: Store<{ profile: ProfileData }>) {
    this.profileData$ = this.store.select((state) => state.profile);
  }

  ngOnInit(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
    this.store.dispatch(loadData());
    this.subscription.add(
      this.profileData$.subscribe((profileData) => {
        if (profileData && profileData.profile && profileData.profile[0]) {
          this.skills = profileData.profile[0].expertise || [];
          this.personalInfo = profileData.profile[0].personalInfo;
          this.projectsData = profileData.profile[0].projects;
          
        } else {
          console.error('No profile data available');
          this.skills = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
