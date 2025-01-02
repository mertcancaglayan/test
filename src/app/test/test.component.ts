import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../models/ProfileData.model'; // Assuming Projects is the correct type
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  @Input() projectsData?: Projects;

  angularProjects: any[] = [];

  ngOnInit(): void {
    console.log(this.projectsData);
    
    if (this.projectsData) {
      this.angularProjects = this.projectsData['angularProjects'] || [];
      console.log(this.angularProjects);
    }
  }
}
