import { Routes } from '@angular/router';
import { ViewAllBookComponent } from './component/view-all-book/view-all-book.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { ViewBookComponent } from './component/view-book/view-book.component';

export const routes: Routes = [
    {
        path:"",component:ViewAllBookComponent
    },
    {
        path:"book/add-book",component:AddBookComponent
    }
,
{
    path:"book/edit-book/:id",component:EditBookComponent
}
,
{
    path:"book/view-book/:id",component:ViewBookComponent
}

];
