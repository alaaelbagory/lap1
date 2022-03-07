import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import{IPost} from '../shared classes/IpostInterface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postes:IPost[];

  constructor(private postsservice:PostService ,private router:Router) {
    this.postes=[];
   }

  ngOnInit(): void {
    this.postsservice.getPosts().subscribe(data =>{
        this.postes=data;
      }
    )
  }
  showComments(id:number){
    this.router.navigate(['/comments',id]);
  }

}
