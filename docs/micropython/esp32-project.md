# Creating A New Esp32 Project

1. Create a directory for the project if it doesn't already exist
```sh
mkdir example-hardware-project
```

At this point, you may want to open the project in code:
```sh
cd example-hardware-project
code .
```

2. scaffold out a micropython project
```sh
micropy init
```
- Generate all templates (select all the options in the second question)
- Select all the relevant stubs. That will look something like this:
```sh
   ● micropython-stdlib-stubs
   ● micropython-esp32-stubs
   ● esp32-micropython-1.15.0
```

3. Create a python environment. This will ensure that everyone working on this project will be using the same version of python/pip etc
```sh
python3 -m venv ./.venv
```

To learn more about python environments, see https://docs.python.org/3/library/venv.html

4. **exit the terminal** and restart VS Code. Open a new terminal. You should see `(.venv)` at the start of your terminal.

Here's an example of how the terminal prompt should look:
```sh
(.venv) luke@system76-pc:~/code/example-hardware-project$
```

1. open `pymakr.conf` and set the `dist_dir` to `src`. This means "only sync files witthin `src`". Without this setting, our entire project would be syced to the hardware. You may notice "yellow squigglies" indicating many of the options are deprecated. You can remove like the config below:
```json
{
    "dist_dir": "src",
    "safe_boot_on_upload": false,
    "py_ignore": [
        "pymakr.conf",
        ".vscode",
        ".gitignore",
        ".git",
        "project.pymakr",
        "env",
        "venv",
        ".python-version",
        ".micropy/",
        "micropy.json"
    ]
}
```

