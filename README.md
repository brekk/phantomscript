     ____  _                 _                                _       _   
    |  _ \| |__   __ _ _ __ | |_ ___  _ __ ___  ___  ___ _ __(_)_ __ | |_
    | |_) | '_ \ / _` | '_ \| __/ _ \| '_ ` _ \/ __|/ __| '__| | '_ \| __|
    |  __/| | | | (_| | | | | || (_) | | | | | \__ \ (__| |  | | |_) | |_
    |_|   |_| |_|\__,_|_| |_|\__\___/|_| |_| |_|___/\___|_|  |_| .__/ \__|
                                                               |_|        

A command-line implementation of the Phantomscript conversion described [here](https://github.com/jagracey/PhantomScript)

Contributions welcome!

# Installation

    yarn add phantomscript global

or

    npm i phantomscript -g

This will give you access to the `boo` executable, so you can convert to and from phantomscript with ease:

    boo -e "butts" >> secrets.txt

You can see that it worked by using `cat -v`: `cat -v secrets.txt` will print all the unprintables.

Similarly, you can pull in that same data and decode it:

    cat secrets.txt | boo -d

=> "butts"

If you feel like doing work but accomplishing nothing, you can alternate your pipes:

    echo butts | boo -e | boo -d | boo -e | boo -d

=> "butts"

Use `boo --help` for more information.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## decode

convert a string from a zero-width representation

**Parameters**

-   `payload` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** a payload to decode

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** decoded string

## encode

convert a string into a zero-width representation

**Parameters**

-   `payload` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** a payload to encode

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** encoded string

# Contributing

This project is very much still in development, please feel free to [submit issues](https://github.com/brekk/phantomscript/issues/new) or [pull requests](https://github.com/brekk/phantomscript/compare) if this library doesn't do what you need it to.
