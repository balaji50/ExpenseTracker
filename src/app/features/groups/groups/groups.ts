import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivitiesList, GroupsList } from '../../../dummy-data/dummy-object';

@Component({
  selector: 'app-groups',
  imports: [CommonModule],
  templateUrl: './groups.html',
  styleUrl: './groups.scss',
})
export class Groups {

groups = GroupsList;
activities = ActivitiesList;
}
