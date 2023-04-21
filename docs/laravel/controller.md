# Controller

In your `PostController` you need to add the `apiQuery` scope and pass the `$request` to it.

```php{13}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $result = Post::apiQuery($request)->get();

        return response()->json($result);
    }   
}
```

