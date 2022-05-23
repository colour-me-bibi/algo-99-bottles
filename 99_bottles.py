

def pluralize(n, word):
    """This function returns the pluralized version of a word if n is not 1."""

    return f"{n} {word}{'s' * (n != 1)}"


def bottle_song():
    """
    This function sings the bottle song by printing to the console:
        99 bottles of beer on the wall, 99 bottles of beer.
        Take one down and pass it around, 98 bottles of beer on the wall.
        98 bottles of beer on the wall, 98 bottles of beer.
        Take one down and pass it around, 97 bottles of beer on the wall.
        97 bottles of beer on the wall, 97 bottles of beer.
        Take one down and pass it around, 96 bottles of beer on the wall.
        96 bottles of beer on the wall, 96 bottles of beer.
        Take one down and pass it around, 95 bottles of beer on the wall.
        95 bottles of beer on the wall, 95 bottles of beer.
        Take one down and pass it around, 94 bottles of beer on the wall.
        94 bottles of beer on the wall, 94 bottles of beer.
        Take one down and pass it around, 93 bottles of beer on the wall.
        93 bottles of beer on the wall, 93 bottles of beer.
        Take one down and pass it around, 92 bottles of beer on the wall.
        92 bottles of beer on the wall, 92 bottles of beer.
        Take one down and pass it around, 91 bottles of beer on the wall.
        91 bottles of beer on the wall, 91 bottles of beer.
        Take one down and pass it around, 90 bottles of beer on the wall.
        ...
        ...
        ...
        Take one down and pass it around, 1 bottle of beer on the wall.
        1 bottle of beer on the wall, 1 bottle of beer.
        Take one down and pass it around, no more bottles of beer on the wall.
        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.
    """

    for n_bottles in range(99, 0, -1):
        print(f"{pluralize(n_bottles, 'bottle')} of beer on the wall, {pluralize(n_bottles, 'bottle')} of beer.")
        print(f"Take one down and pass it around, {pluralize(n_bottles - 1, 'bottle')} of beer on the wall.")

    print(f"No more bottles of beer on the wall, no more bottles of beer.")
    print(f"Go to the store and buy some more, 99 bottles of beer on the wall.")


def recursive_bottle_song(n_bottles):
    """This program recursively sings the bottles song starting with 99 bottles of beer."""

    if n_bottles == 0:
        print("No more bottles of beer on the wall, no more bottles of beer.")
        print("Go to the store and buy some more, 99 bottles of beer on the wall.")
        return

    print(f"{pluralize(n_bottles, 'bottle')} of beer on the wall, {pluralize(n_bottles, 'bottle')} of beer.")
    print(f"Take one down and pass it around, {pluralize(n_bottles - 1, 'bottle')} of beer on the wall.")
    recursive_bottle_song(n_bottles - 1)


def main():
    """This program sings the bottles song starting with 99 bottles of beer."""

    bottle_song()
    # recursive_bottle_song()


if __name__ == "__main__":
    main()
