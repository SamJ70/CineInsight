import asyncio
from tmdb import route, schema

async def main():
    base = route.Base()
    base.key = "ef5a26280bf6632f489dcd8d2284336b"

    movies = await route.Movie().search("fight club")
    for movie in movies:
        print(movie["name"])

    movies = movies.to(schema.Movies)  # convert `dict` to `schema.Movies`
    for movie in movies:
        print(movie.name)

asyncio.run(main())