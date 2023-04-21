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
        $result = Post::apiQuery($request);

        return response()->json($result);
    }   
}
```

## Mass Assignments

If you're going to use mass assignments, you need to create its routes first:

```php{1-3}
Route::post('posts/batch', [PostController::class, 'storeBatch']);
Route::patch('posts/batch', [PostController::class, 'updateBatch']);
Route::patch('posts/batch-destroy', [PostController::class, 'destroyBatch']);
Route::apiResource('loadout-lists', PostController::class);
```

::: warning
Note the `batch-destroy` endpoint is using a `PATCH` request and not `DELETE`
:::

And then you have to create your controller methods like this:

```php {27-38,56-67,78-88}
<?php

namespace Konnec\VueEloquentApi\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Konnec\VueEloquentApi\Models\Post;

class PostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $result = Post::apiQuery($request);

        return response()->json($result);
    }

    public function store(Request $request): array
    {
        $post = Post::create($request->all());

        return [
            'data' => $post->fresh()->toArray(),
        ];
    }

    public function storeBatch(Request $request): array
    {
        $result = [];
        foreach ($request->data as $item) {
            $line = $this->store(new Request($item));
            array_push($result, $line['data']);
        }

        return [
            'data' => $result,
        ];
    }

    public function show(Post $post): array
    {
        return [
            'data' => $post->toArray(),
        ];
    }

    public function update(Request $request, Post $post): array
    {
        $post->fill($request->all())->save();

        return [
            'data' => $post->toArray(),
        ];
    }

    public function updateBatch(Request $request): array
    {
        $result = [];
        foreach ($request->data as $item) {
            $line = $this->update(new Request($item), $item['id']);
            array_push($result, $line['data']);
        }

        return [
            'data' => $result,
        ];
    }

    public function destroy(Post $post): array
    {
        $post->delete();

        return [
            'data' => $post->toArray(),
        ];
    }
    
    public function destroyBatch(Request $request): array
    {
        $result = [];
        foreach ($request->data as $item) {
            $line = $this->destroy(new Request($item), $item['id']);
            array_push($result, $line['data']);
        }

        return [
            'data' => $result,
        ];
    }
}
```
