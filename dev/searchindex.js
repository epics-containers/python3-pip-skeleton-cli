Search.setIndex({"docnames": ["developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "genindex", "index", "user/explanations/decisions", "user/explanations/decisions/0001-record-architecture-decisions", "user/explanations/decisions/0003-docs-structure", "user/explanations/decisions/0004-why-src", "user/explanations/decisions/0005-pyproject-toml", "user/explanations/decisions/0006-setuptools-scm", "user/explanations/decisions/0007-dev-dependencies", "user/explanations/decisions/0008-use-tox", "user/explanations/decisions/0009-sphinx-theme", "user/explanations/decisions/0010-vscode-settings", "user/explanations/decisions/0011-requirements-txt", "user/explanations/skeleton", "user/explanations/why-pre-commit", "user/explanations/why-use-skeleton", "user/how-to/conda", "user/how-to/excalidraw", "user/how-to/existing", "user/how-to/pypi", "user/how-to/run-container", "user/how-to/update", "user/index", "user/reference/api", "user/tutorials/installation", "user/tutorials/new"], "filenames": ["developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "genindex.rst", "index.rst", "user/explanations/decisions.rst", "user/explanations/decisions/0001-record-architecture-decisions.rst", "user/explanations/decisions/0003-docs-structure.rst", "user/explanations/decisions/0004-why-src.rst", "user/explanations/decisions/0005-pyproject-toml.rst", "user/explanations/decisions/0006-setuptools-scm.rst", "user/explanations/decisions/0007-dev-dependencies.rst", "user/explanations/decisions/0008-use-tox.rst", "user/explanations/decisions/0009-sphinx-theme.rst", "user/explanations/decisions/0010-vscode-settings.rst", "user/explanations/decisions/0011-requirements-txt.rst", "user/explanations/skeleton.rst", "user/explanations/why-pre-commit.rst", "user/explanations/why-use-skeleton.rst", "user/how-to/conda.rst", "user/how-to/excalidraw.rst", "user/how-to/existing.rst", "user/how-to/pypi.rst", "user/how-to/run-container.rst", "user/how-to/update.rst", "user/index.rst", "user/reference/api.rst", "user/tutorials/installation.rst", "user/tutorials/new.rst"], "titles": ["Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "API Index", "python3-pip-skeleton-cli", "Architectural Decision Records", "1. Record architecture decisions", "3. Standard documentation structure", "4. Use a source directory", "5. Use pyproject.toml", "6. Use setuptools_scm", "7. Installing developer environment", "8. Use tox and pre-commit", "9. Sphinx Theme", "10. Include vscode settings", "5. Use pyproject.toml", "Working on the Skeleton Repo", "Why use pre-commit", "Why use a skeleton structure?", "Creating an Anaconda Token", "How to embed Excalidraw diagrams", "How to adopt the skeleton in an existing repo", "Creating a PyPI Token", "Run in a container", "How to update to the latest skeleton structure", "User Guide", "API", "Installation", "Creating a new repo from the skeleton"], "terms": {"you": [0, 1, 2, 3, 4, 5, 9, 11, 15, 17, 19, 23, 26, 27, 28, 29, 31, 34, 35], "can": [0, 1, 2, 4, 5, 9, 11, 15, 17, 18, 23, 25, 28, 29, 31, 34, 35], "base": [0, 14, 15, 18, 35], "from": [0, 7, 8, 11, 13, 17, 21, 23, 25, 28, 30, 32, 34], "project": [0, 4, 6, 7, 11, 13, 14, 15, 16, 18, 23, 25, 26, 29, 35], "directori": [0, 8, 12], "run": [0, 1, 6, 7, 8, 9, 11, 15, 17, 19, 24, 28, 32], "tox": [0, 2, 4, 5, 9, 11, 12, 21, 28, 35], "e": [0, 2, 4, 5, 9, 18, 28, 35], "thi": [0, 2, 3, 6, 8, 9, 11, 13, 14, 15, 17, 19, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35], "static": [0, 7, 8, 9, 11], "which": [0, 6, 9, 11, 15, 19, 23, 35], "includ": [0, 12, 23, 32, 35], "api": [0, 8, 24, 28, 32], "pull": [0, 1, 6, 11, 23, 25, 30, 31], "docstr": [0, 8], "code": [0, 2, 11, 15, 17, 21, 25, 28, 35], "document": [0, 1, 7, 12, 18, 20, 27, 32], "standard": [0, 1, 7, 12], "The": [0, 1, 2, 8, 11, 14, 15, 20, 23, 24, 25, 26, 28, 29, 34, 35], "built": [0, 30], "html": [0, 27, 35], "open": [0, 1, 9, 27], "local": [0, 9, 19], "web": [0, 35], "brows": [0, 35], "firefox": [0, 35], "index": [0, 28, 32, 35], "also": [0, 1, 4, 7, 11, 23, 24, 32, 34, 35], "an": [0, 2, 6, 15, 19, 31, 32, 35], "process": [0, 8], "watch": 0, "your": [0, 1, 23, 26, 27, 28, 29, 31], "chang": [0, 1, 2, 6, 11, 19, 24, 25, 27, 31, 35], "rebuild": [0, 22, 27], "whenev": 0, "see": [0, 3, 13, 14, 15, 16, 17, 19, 23, 26, 28, 29, 35], "reload": 0, "ani": [0, 1, 2, 6, 18, 23, 25, 34, 35], "browser": [0, 27], "page": [0, 3, 8, 11, 29, 35], "view": [0, 35], "localhost": 0, "http": [0, 3, 6, 11, 16, 18, 19, 20, 27, 31, 34], "8000": 0, "If": [0, 1, 2, 11, 23, 24, 25, 26, 28, 29, 31, 34, 35], "ar": [0, 1, 8, 14, 15, 17, 19, 21, 22, 23, 24, 25, 28, 29, 30, 35], "make": [0, 1, 7, 11, 21, 27, 31, 35], "sourc": [0, 5, 9, 11, 12, 34, 35], "too": 0, "tell": [0, 2], "src": [0, 15, 28], "most": [1, 14, 19], "welcom": 1, "all": [1, 2, 11, 15, 19, 22, 23, 24, 26, 29, 35], "request": [1, 6, 22, 23, 35], "handl": [1, 2], "through": [1, 9], "github": [1, 3, 6, 9, 11, 19, 23, 26, 28, 29, 30, 31, 34], "pleas": [1, 3, 8, 28, 35], "check": [1, 2, 4, 5, 6, 8, 9, 15, 19, 28, 31, 35], "exist": [1, 11, 13, 31, 32, 34, 35], "befor": [1, 19, 34, 35], "file": [1, 2, 5, 15, 21, 22, 24, 27, 28, 31], "new": [1, 3, 9, 11, 13, 23, 26, 28, 29, 32, 34], "one": [1, 14, 23, 24, 35], "have": [1, 2, 9, 22, 23, 24, 25, 26, 28, 29, 35], "great": 1, "idea": 1, "involv": 1, "big": 1, "ticket": 1, "we": [1, 12, 13, 15, 17, 18, 19, 22], "want": 1, "sure": [1, 27], "don": [1, 35], "t": [1, 14, 35], "spend": 1, "time": [1, 2, 15, 19, 24, 31, 35], "someth": [1, 6, 28], "might": 1, "fit": 1, "scope": [1, 26, 29], "offer": 1, "place": 1, "ask": 1, "question": 1, "share": 1, "i": [1, 2, 4, 5, 6, 7, 8, 12, 14, 15, 19, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35], "end": 1, "obviou": 1, "when": [1, 9, 22, 23, 35], "close": [1, 6], "rais": 1, "instead": [1, 29, 30], "while": 1, "100": 1, "doe": [1, 11, 15, 24, 35], "librari": [1, 32], "bug": [1, 15], "free": 1, "significantli": 1, "reduc": 1, "number": [1, 3, 17, 24, 30, 33], "easili": 1, "caught": 1, "remain": 1, "same": [1, 3, 19, 23], "improv": [1, 14], "contain": [1, 8, 9, 11, 32], "inform": [1, 14], "set": [1, 2, 8, 12, 26, 28, 29, 35], "up": [1, 7, 11, 23, 26, 29, 31], "environ": [1, 9, 12, 15, 21, 35], "test": [1, 7, 15, 18, 21, 23, 24, 28], "what": [1, 23, 28, 31], "should": [1, 21, 27, 34, 35], "follow": [1, 3, 8, 9, 11, 15, 27, 35], "black": [2, 8, 11, 24], "flake8": [2, 8, 11, 24], "isort": [2, 8, 11, 24], "under": [2, 9, 18, 24], "abov": [2, 13, 14, 15, 16, 27, 28, 35], "command": [2, 11, 18, 35], "Or": 2, "instal": [2, 7, 11, 12, 15, 24, 28, 30, 32, 35], "hook": [2, 19, 24], "each": [2, 24, 29], "do": [2, 5, 23, 26, 29, 31, 35], "git": [2, 6, 9, 17, 19, 23, 24, 25, 28, 31, 34, 35], "just": [2, 21, 24], "report": [2, 4, 24], "reformat": 2, "repositori": [2, 8, 15, 26], "likewis": 2, "get": [2, 3, 7, 9, 23, 30], "those": [2, 11, 23, 24], "manual": 2, "json": [2, 21, 28], "formatt": 2, "well": [2, 20, 24], "save": [2, 11, 23, 24, 27], "highlight": [2, 5], "editor": [2, 21, 24], "window": 2, "To": [3, 6, 9, 13, 23, 24, 26, 28, 29, 30, 31, 35], "checklist": 3, "choos": [3, 9], "pep440": 3, "compliant": 3, "pep": [3, 16, 18], "python": [3, 6, 9, 11, 16, 17, 18, 21, 24, 35], "org": [3, 11, 16, 18, 26, 28, 35], "0440": 3, "go": [3, 15], "draft": 3, "click": [3, 9, 27], "tag": [3, 17, 35], "suppli": [3, 18], "chose": 3, "creat": [3, 11, 13, 15, 23, 27, 28, 31, 32], "gener": [3, 6, 11, 17, 22], "note": [3, 26, 29, 32, 35], "review": 3, "edit": [3, 15, 23], "titl": [3, 8, 18], "publish": [3, 22, 26, 28, 29, 35], "push": [3, 19, 23, 24, 28], "main": [3, 15, 28, 30, 31, 35], "branch": [3, 23, 28, 35], "ha": [3, 6, 20, 23, 25, 34, 35], "effect": 3, "except": [3, 23], "option": [3, 18, 31], "done": [4, 5], "It": [4, 5, 11, 23, 25, 27, 34, 35], "find": [4, 21, 35], "function": [4, 8, 14, 35], "look": [4, 20, 24, 28, 35], "like": [4, 11, 19, 24, 28, 35], "them": [4, 5, 11, 22, 23, 24, 35], "error": [4, 35], "coverag": [4, 11, 21], "commandlin": [4, 28, 31, 34, 35], "cov": 4, "xml": 4, "type": [5, 8, 9, 34], "definit": 5, "without": [5, 15], "potenti": 5, "issu": [5, 22, 23], "where": [5, 6, 16], "match": [5, 21], "modul": [6, 11, 24, 25, 28, 35], "merg": [6, 11, 23, 31], "python3": [6, 9, 23, 28, 30, 31, 34, 35], "pip": [6, 9, 18, 22, 23, 28, 30, 31, 34, 35], "skeleton": [6, 9, 14, 15, 18, 26, 29, 30, 32, 34], "structur": [6, 12, 15, 20, 28, 32], "provid": [6, 11, 18, 19, 29, 35], "mean": [6, 11, 15, 17, 26, 29], "keep": [6, 11, 25], "techniqu": [6, 11], "sync": [6, 11], "between": [6, 11], "multipl": [6, 11, 23, 24], "latest": [6, 19, 22, 32], "version": [6, 11, 17, 22, 30, 33, 35], "rebas": [6, 23], "fals": [6, 15], "com": [6, 9, 27, 31, 34], "diamondlightsourc": [6, 9, 11, 30, 31, 34], "conflict": [6, 23, 28], "indic": 6, "area": 6, "setup": [6, 9, 17, 18, 28, 35], "current": [6, 12, 28, 34], "more": [6, 14, 25, 29, 32], "detail": 6, "split": [7, 11, 32], "four": [7, 14, 32], "categori": [7, 32], "access": [7, 26, 29, 32, 35], "link": [7, 13, 14, 15, 16, 26, 29, 32], "side": [7, 32], "bar": [7, 32], "contribut": [7, 11, 25, 28], "build": [7, 8, 18, 22], "doc": [7, 8, 9, 11, 15, 25, 27, 28], "us": [7, 8, 9, 11, 12, 13, 14, 18, 20, 23, 26, 27, 28, 29, 30, 31, 32, 34, 35], "sphinx": [7, 8, 9, 11, 12], "pytest": [7, 9, 11, 24, 35], "analysi": [7, 8, 9, 11], "mypi": [7, 8, 9, 11, 24], "lint": [7, 8, 9], "pre": [7, 8, 9, 11, 12, 30, 32], "commit": [7, 8, 9, 11, 12, 17, 22, 23, 25, 28, 32, 35], "updat": [7, 18, 23, 25, 28, 32], "tool": [7, 8, 11, 17, 19, 21, 28, 31, 35], "releas": [7, 11, 17, 22, 30, 32, 34, 35], "practic": [7, 32], "step": [7, 9, 23, 32], "dai": 7, "dev": [7, 9, 18, 28, 35], "task": [7, 21, 28], "explan": [7, 11, 14, 28], "why": [7, 28, 32, 35], "architectur": [7, 32], "technic": [7, 14, 32], "materi": [7, 32], "defin": [8, 20, 25], "conform": 8, "format": 8, "style": 8, "import": 8, "order": [8, 14, 18, 22, 27], "how": [8, 14, 15, 26, 29, 35], "guid": [8, 11, 14], "napoleon": 8, "extens": [8, 21], "As": [8, 15, 28], "googl": 8, "consid": 8, "hint": 8, "signatur": 8, "For": [8, 21, 35], "exampl": [8, 11, 25, 35], "def": [8, 35], "func": 8, "arg1": 8, "str": [8, 33], "arg2": 8, "int": 8, "bool": 8, "summari": [8, 35], "line": [8, 11, 23, 35], "extend": 8, "descript": [8, 35], "arg": 8, "return": 8, "valu": 8, "true": [8, 15], "extract": 8, "underlin": 8, "convent": [8, 27], "headl": 8, "1": [8, 12], "head": 8, "2": [8, 11], "3": [8, 9, 12, 34], "These": [9, 18, 25], "instruct": [9, 28], "take": [9, 23, 24, 25, 28, 35], "minim": 9, "requir": [9, 14, 17, 19, 20, 21, 22, 23, 26, 27, 29, 34], "so": [9, 23, 24, 25, 28, 34, 35], "first": [9, 23, 28, 35], "cli": [9, 15, 30, 34], "either": 9, "host": 9, "machin": 9, "venv": [9, 34, 35], "8": [9, 12, 34, 35], "later": [9, 27, 34, 35], "vscode": [9, 11, 12, 24, 28], "virtualenv": [9, 34, 35], "cd": [9, 28], "m": [9, 23, 34, 35], "bin": [9, 34, 35], "activ": [9, 34, 35], "devcontain": 9, "reopen": 9, "prompt": 9, "termin": [9, 34], "graph": [9, 24], "packag": [9, 15, 25, 26, 28, 29, 35], "tree": [9, 24], "pipdeptre": 9, "now": [9, 23, 24, 34, 35], "p": [9, 11, 19, 28, 35], "parallel": [9, 19, 35], "inspir": 11, "jaraco": [11, 25], "pypi": [11, 28, 32], "io": [11, 20, 30], "integr": [11, 21, 24, 35], "setuptools_scm": [11, 12, 33], "manag": [11, 22], "tutori": [11, 14, 28, 35], "refer": [11, 14, 23, 25, 28, 33], "action": [11, 26, 29, 35], "ci": [11, 15, 19, 21, 22, 23, 24, 35], "deploy": 11, "verifi": [11, 17, 19], "thing": [11, 14, 24, 35], "relat": 11, "repo": [11, 21, 22, 25, 31, 32], "date": [11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "serv": 11, "work": [11, 18, 21, 29, 32], "who": 11, "would": [11, 15, 23, 24, 28], "prefer": [11, 27], "cherri": 11, "pick": [11, 23, 31], "eas": 11, "adopt": [11, 23, 25, 31, 32], "path": [11, 28, 34, 35], "my_github_user_or_org": [11, 28, 35], "section": [11, 25, 29], "user": [11, 21, 22, 26, 29], "develop": [11, 12, 15, 19, 21, 25, 28, 35], "back": [11, 23, 27, 28], "major": 12, "adr": [12, 13], "describ": [12, 13, 29], "michael": [12, 13], "nygard": [12, 13], "below": [12, 15], "list": [12, 18], "our": 12, "4": 12, "5": [12, 35], "pyproject": [12, 18, 28], "toml": [12, 18, 28], "6": 12, "7": 12, "9": 12, "theme": 12, "10": 12, "2022": 13, "02": 13, "18": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "accept": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "need": [13, 14, 15, 16, 18, 22, 23, 24, 34, 35], "made": [13, 24], "": [13, 14, 15, 23, 25], "articl": [13, 14, 15, 16, 35], "copi": [13, 25], "past": [13, 25], "ones": 13, "2023": [14, 15, 16, 17, 18, 19, 20, 21, 22], "01": [14, 15, 16, 17, 18, 19, 20, 21, 22], "organ": [14, 26, 29, 35], "approach": [14, 24, 25, 26, 29], "propos": 14, "david": 14, "la": 14, "grand": 14, "unifi": 14, "theori": 14, "There": [14, 22, 24, 25, 35], "secret": [14, 26, 29], "understood": 14, "write": [14, 35], "good": [14, 20], "softwar": [14, 34], "isn": 14, "call": 14, "thei": [14, 15], "repres": 14, "differ": [14, 25, 31], "purpos": 14, "creation": [14, 25], "understand": 14, "implic": 14, "help": [14, 19], "often": 14, "immens": 14, "topic": [14, 35], "decid": 15, "per": [15, 16], "hynek": 15, "summar": [15, 35], "advantag": [15, 24], "cannot": 15, "shadow": 15, "wa": [15, 24, 28], "root": 15, "against": [15, 19, 22], "A": 15, "secondari": 15, "symmetri": 15, "wai": [15, 18, 19, 32], "wheel": 15, "job": [15, 35], "isol": 15, "install_requir": 15, "suffici": [15, 25], "lock": [15, 22], "mode": 15, "modif": 15, "reinstal": 15, "regular": 15, "distribut": 15, "put": 16, "configur": [16, 35], "0518": 16, "mechan": [17, 18, 22], "setuptool": 17, "scm": 17, "pypa": [17, 33], "automat": [17, 26, 28, 29], "add": [17, 23, 25, 26, 27, 28, 29, 35], "suffix": 17, "untag": 17, "depend": [18, 22, 28, 30, 34], "621": 18, "ad": [18, 35], "0621": 18, "enabl": [18, 21, 27, 28, 35], "its": [18, 30, 34], "virtual": [18, 35], "bash": 18, "easi": [19, 23], "rapid": 19, "inner": 19, "loop": 19, "experi": [19, 21], "autom": 19, "wiki": 19, "en": 19, "some": [19, 21, 23, 25, 31, 35], "about": 19, "succe": 19, "non": 19, "critic": 19, "avoid": 19, "common": 19, "mistak": 19, "pydata": 20, "here": [20, 32], "readthedoc": 20, "nice": 20, "navig": 20, "featur": [20, 23, 34, 35], "coupl": 21, "neat": 21, "id": 21, "folder": 21, "recommend": [21, 24, 34], "best": 21, "launcher": 21, "debug": 21, "overrid": [21, 22], "verif": 21, "launch": [21, 28], "other": [21, 23, 24, 29, 35], "unaffect": 21, "abil": 22, "pin": 22, "guarante": 22, "By": 22, "default": 22, "behaviour": 22, "everi": 22, "txt": 22, "freez": 22, "asset": 22, "download": 22, "next": [22, 23], "less": 22, "overhead": 22, "fg": 22, "protect": 23, "restrict": 23, "pr": 23, "onli": [23, 29], "occasion": 23, "care": 23, "procedur": 23, "kept": 23, "tidi": 23, "In": 23, "particular": [23, 25], "must": 23, "nnn": 23, "wrong": 23, "incorrect": 23, "messag": 23, "track": [23, 24, 25], "out": [23, 28], "forc": 23, "disallow": 23, "safe": 23, "record": [23, 32], "histori": 23, "off": [23, 27], "checkout": [23, 28], "reset": 23, "hard": 23, "origin": 23, "becaus": [23, 25, 29], "mai": [23, 26, 31, 34, 35], "been": [23, 25, 34], "b": [23, 28], "my": [23, 27], "u": [23, 35], "happi": 23, "delet": [23, 25, 35], "fd": 23, "onc": [23, 24, 25, 35], "year": 23, "otherwis": 23, "caus": 23, "dure": 23, "re": 23, "alreadi": [23, 26, 29, 30], "perform": [23, 34, 35], "rememb": 23, "theirs": 23, "right": 23, "ededf000": 23, "screen": 23, "replac": 23, "quit": 23, "handoff": 23, "202x": 23, "xx": 23, "initi": [24, 25], "took": 24, "everyth": 24, "had": 24, "plugin": 24, "catch": 24, "failur": 24, "longer": 24, "than": [24, 25], "state": 24, "public": 24, "stabl": 24, "did": 24, "taken": [24, 25], "address": 24, "rearrang": 24, "still": 24, "anoth": 24, "solut": 24, "enter": 24, "allow": 24, "workflow": [24, 28, 35], "until": 24, "pass": [24, 35], "remot": [24, 35], "matrix": 24, "mani": 25, "start": [25, 27, 32], "kind": 25, "templat": [25, 35], "basic": 25, "custom": 25, "specif": 25, "variabl": 25, "One": 25, "cookiecutt": 25, "problem": 25, "appli": 25, "cut": 25, "individu": 25, "lead": 25, "partial": 25, "fix": [25, 28, 35], "miss": 25, "explain": 25, "blog": 25, "post": 25, "fork": [25, 35], "oper": 25, "No": 25, "reason": [25, 35], "content": 25, "numer": 25, "name": [25, 26, 27, 28, 29, 35], "singl": [25, 28, 29, 35], "top": [25, 35], "occur": 25, "howev": 25, "simpl": 25, "diverg": 25, "much": 25, "increasingli": 25, "probabl": 25, "sign": 25, "benefit": 25, "At": 25, "point": [25, 35], "abandon": 25, "rst": [25, 28, 35], "account": [26, 29, 35], "author": [26, 29], "simplest": [26, 29], "gain": [26, 29], "permiss": [26, 29], "create_account": [26, 29], "wish": [26, 27, 34, 35], "addition": 26, "organis": 26, "create_organis": 26, "learn": [26, 29], "creating_a_token": 26, "creating_a_secret": 26, "anaconda_token": 26, "eyj2zxjzaw9uijoimsisimvuy29kaw5nijoiynn0cmluzyisimnvbxbyzxnzzwqionrydwusimvuy29kzwqioij4no1axxobofx1mdaxnh3pr8i4r3wkvqw": 27, "pu13j1sntep02mans0oa2drcdtawmthcxmd56v": 27, "r8axqmbcdtawmddun9ntdouhtjdoqvfixhuwmdfl6d5cdtawmgjft7a3xhuwmda3": 27, "c08xhuwmde4pn9cdtawmwvcdtawmdtxnlx1mdaxyov": 27, "6l5ccp5cdtawmtbtl0gahumsu3b5nswl1cur0zyfz8": 27, "fptomxhuwmdfkl5ktwufcdtawmttmgjjpno5pfb29": 27, "bx8q3tcv": 27, "bcdtawmgx5x1x1mdawzvh49q": 27, "tj1x1mdaxzc3pxrtmjkodklqcvsb4ottlyt90xfzrvqzkdx1t2cvzdx1cdtawmtx6": 27, "vs3ovrbnfxij9o80ejgk6hcdtawmtjcqvqype0ugpdjlktf0e9cxi5cdtawmdjaxhuwmdfi": 27, "sz1lizpsoj9xg6tp26czd1uz9tgzsmoxhuwmdfh5zfrco1cxg": 27, "6sinby5t3d2bsrnvfy1x1mdaxmr2ihqwhnuzjicvwxhuwmdezva3j3pxcvfhcdtawmdlkmhlcdtawmtq2zvf9cuk": 27, "ne8": 27, "ddp53x1cdtawmdzzcvgzlfxiikedxhuwmdexxyjcdtawmtoh46rhufx1mdawmkki2xqyxku7kfx1mdawn1x0hvx1mdaxodw0mnvtbpcxdz13oywws1ms4qumi9tdpoyqt55": 27, "hn5cdtawmwsexhuwmdflvp1e4zfsy3bcdtawmtjkf1rmw": 27, "7ipmlynah6vj1df99cdtawmtu8xhuwmdbmrnp7rstcdtawmt": 27, "777yrepi3tuavkhzdlr7dlx1mdaxno5qt737zyzuyu67y3lcik6vzfx1mdawmisplhm4uvx1mdaxof": 27, "oznhcdtawmtffpi3xlszsbnxsbujl": 27, "vk35m5cdeviwyheilzqhnncdtawmtzcblx1mdawnsgk4ei4zk8sk3iulzkoppr299pdniprfjnixhuwmde4xophqfl3imtynpbhxhuwmdexzjnbxhuwmdawj6ua50nyvkh5b9s8": 27, "fki": 27, "v": 27, "t07xomjtcdtawmtu": 27, "bpat0urulr9mzrmw11x1mdaxmzkqjghcdtawmwgc5w6av1xiyz": 27, "mj7rpahh1voz3oetcbldlveuxwagzozcp6xchxcjcxhuwmde4zvx1mdawnnvqxhuwmdezd15ozedk5uitym4wv": 27, "utnpjbxhuwmdew": 27, "8agtrg7hvxip4hrn3s1r95x36nwq": 27, "70lry": 27, "teen": 27, "sn48pgwoj99m75cdtawmtm3vx": 27, "eandcxj3vzu8hfcwng5xcp6qtflxuhds4buvcdtawmtnozz3x": 27, "1m": 27, "j4pyktypxhuwmdfmudrsxulcdtawmwzhobh2kkn7konr": 27, "edcivwfs5": 27, "a0fxmhezauzjmxhuwmde2y3tuxhuwmda1n5fr8codcfwhky648avirzvhxhuwmdayxhuwmda2vyc4tnaddcjcdtawmtfczo5hcfx1mdawmomzxhuwmde4xfza4fxuxhuwmda0v7cpkthtrvx1mdawzvx1mdawnvlcdtawmthyxhuwmde0yoncdtawmtg2": 27, "gdy6fo1pkek8e5cdtawmdkz3h4oulx0xhuwmdfjspbcdtawmtzbdlx1mdaxmrhcdtawmdmlichcdtawmdfdxhrcdtawmdrkofccxhuwmdawlqu9vfug2fx1mdaxmwjcdtawmgbxxhuwmdewxgjksje1u23i3noh3xpcdtawmtpw3jlsxhuwmde2nlc9tvtaqlx1mdawmlx09ly97na0vvn3ivaoguncdfx1mdaxmkhq0enb": 27, "3cpzvvcdtawmdrkofbcdtawmdl7z4ru59tm2gpcdtawmtbcdtawmdfzvm": 27, "olx1mdaxzw9cdtawmdbh4wxcdtawmthpqpporlv35uncxhuwmda0kmtzowodzue1": 27, "nl09enpwwr0ffx6ffx1mdaxmtxexhuwmda3izo9il4t3fh": 27, "9mekmcu6h0mhvulcdtawmgz2tfuv": 27, "pimx9nphuxhn4pcdtawmthcdtawmtnh4lano1x1mdaxy2dj5un3ouinp": 27, "lhs1x1mdaxzj9i": 27, "onb6mfmllx1mdawnfxijvx1mdaxmfxmxhuwmdbl3kmxcmffxg6gj8cdklx1mdawm": 27, "fomr6xojcdtawmtjiqnbcdtawmtgqgfx1mdaxmqamnel9xhuwmdflxhuwmda0xhuwmda2jfx1mdaxmoghrlx1mdaxmey5ivxupvcp0dncdtawmtddmckgxqbcdtawmdrcdtawmduknfx1mdaxmorcdtawmwvcdtawmdsosvx1mdaxy1x1mdaxyzhcbmjukkaxmocgxfxcdtawmdjcdtawmwgyxg5gvixhjajgan1cdtawmdmvyhi1qsrfk4jtgzcgphzg64ncdtawmwrcdtawmdbe81x1mdawn8jvnxipxhuwmde0iftcdtawmdashr8vpo7op3uvbollsz3": 27, "ct": 27, "7unwps7do3": 27, "hyh4p2": 27, "1x1mdawmwrornqlqfm2qvxukfxy7feavcfajprissvd": 27, "pcdtawmwplzusqpuy6nfx1mdaxnsrcdtawmwpup1t0xgzcdtawmgiyoadcdtawmti49lx1mdawmywxgafcdtawmdrcdtawmdpwkzhcdtawmtrv299z4gpcdtawmwoqnvx1mdaxntt7": 27, "oqu6txkmn14xhuwmda2w9fk2zdcdtawmdbcdtawmwvcdtawmdfaxrttpj5cdtawmdrohvx1mdaxykfr6jja3kk2xhuwmdfk9srcdtawmtbcznnurkcvvwi": 27, "h1x1mdaxzxlcdtawmdg0qnd4ndejxgjcdtawmdcmylb6": 27, "ct4kohpvx1mdaxmoa332p0wgmgxhuwmdfl9vq0kxl0wfx1mdawm9ehxhuwmdaz10dcdtawmddxx35cdtawmwbrxhuwmdazxhuwmdbmq1xmbczvnxipva2txhuwmdfisfx1mdaxyf6": 27, "yht993ktynt63k5czks50yjumrqz5ltosezlxhuwmde1xg6p1tpsnlozx1xyrvgj": 27, "vx1mdawn": 27, "iuxhuwmdezxhuwmdexrvx1mdawneji0oo6y1xdxhuwmde0imjguesyxhuwmde5o1x1mdaxzewjnclrj1x1mdaxy1x1mdaxmiuwvqmnejjccrpa80niffx1mdaxy95cdtawmtzgm08": 27, "ytbf3flcdtawmtjdwetcxnxin1xuj8xkxhuwmda3nry3sfx1mdawn": 27, "ulyeppjsralpt9kki7tfx1mdaxnmh7y6fmao": 27, "povxc3zr2": 27, "vx1mdaxmm2qpoekjn3opd6ze3svvev916ncdtawmdn68plm": 27, "lsz": 27, "bb": 27, "si8u": 27, "uhcbjnmxhuwmde4xsz4mlzkpdbkd79u1a0qkzlcdtawmtjs4xvcdj6p17xef1bbxhuwmde4xhuwmde2qj18hkcocwpq": 27, "i5vufm": 27, "oqo8mcmkzc2irvx1mdaxzm32uj9bd8fiwj3px7len8hqe9hbzvx1mdaxofxcvwi75lx1mdaxm8dxxg5ykb3cj8tt9ou3rw9": 27, "xhuwmdazntdm0sj9": 27, "thisthat": 27, "imag": [27, 28], "scene": 27, "checkbox": 27, "load": 27, "export": 27, "svg": [27, 28], "insid": 27, "raw": 27, "over": 27, "retain": 27, "font": 27, "result": [27, 28, 35], "last": [28, 35], "element": [28, 35], "unless": [28, 35], "overridden": [28, 35], "clone": 28, "tmp": 28, "orphan": 28, "modifi": [28, 35], "leav": 28, "token": [28, 32], "scanspec": 28, "46": 28, "show": 28, "switch": 28, "auto": 28, "__main__": 28, "py": [28, 35], "__init__": 28, "cfg": [28, 35], "conf": 28, "_static": 28, "theme_overrid": 28, "css": 28, "readm": [28, 35], "pipfil": 28, "changelog": [28, 35], "yml": 28, "gitattribut": 28, "fail": [28, 35], "d": 28, "boilerpl": 28, "were": 28, "remov": [28, 35], "rm": [28, 30], "hello": 28, "dl": 28, "logo": 28, "favicon": 28, "ico": 28, "accomplish": 28, "f": 28, "Then": 28, "final": 28, "altern": 29, "secur": 29, "bad": 29, "actor": 29, "obtain": 29, "kei": 29, "affect": 29, "store": 29, "adding_a_token": 29, "ignor": 29, "regard": 29, "pypi_token": 29, "pypi_api_token": 29, "avail": 30, "registri": 30, "docker": 30, "ghcr": 30, "ago": 31, "could": 31, "fetch": 31, "diff": 31, "fetch_head": 31, "typic": 32, "usag": 32, "emb": 32, "excalidraw": 32, "diagram": 32, "anaconda": 32, "experienc": 32, "decis": 32, "intern": 33, "__version__": 33, "calcul": 33, "interfer": 34, "deactiv": [34, 35], "virual": [34, 35], "execut": [34, 35], "conda": [34, 35], "exit": [34, 35], "pipenv": [34, 35], "interfac": 34, "inherit": 35, "entri": 35, "declar": 35, "g": 35, "interpret": 35, "continu": 35, "extra": 35, "conveni": 35, "script": 35, "via": 35, "Will": 35, "unit": 35, "short": 35, "info": 35, "test_boilerplate_remov": 35, "test_module_descript": 35, "assertionerror": 35, "test_changed_readme_intro": 35, "intro": 35, "test_changed_readme_bodi": 35, "peopl": 35, "test_removed_changelog_not": 35, "test_changed_changelog": 35, "0": 35, "28": 35, "text": 35, "mention": 35, "intend": 35, "mark": 35, "expect": 35, "decor": 35, "relev": 35, "xfail": 35, "written": 35, "yet": 35, "test_explanations_written": 35, "output": 35, "empti": 35, "websit": 35, "cat": 35, "gitremot": 35, "gh": 35, "own": 35}, "objects": {"": [[33, 0, 0, "-", "python3_pip_skeleton"]], "python3_pip_skeleton.python3_pip_skeleton": [[33, 1, 1, "", "__version__"]]}, "objtypes": {"0": "py:module", "1": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"]}, "titleterms": {"build": [0, 9, 35], "doc": [0, 35], "us": [0, 2, 4, 5, 15, 16, 17, 19, 22, 24, 25], "sphinx": [0, 20], "autobuild": 0, "contribut": 1, "project": 1, "issu": [1, 2], "discuss": 1, "code": [1, 8], "coverag": 1, "develop": [1, 7, 9, 18], "guid": [1, 7, 32], "run": [2, 4, 5, 30, 35], "lint": 2, "pre": [2, 19, 24], "commit": [2, 19, 24], "fix": 2, "vscode": [2, 21], "support": 2, "make": [3, 23], "releas": 3, "test": [4, 9, 35], "pytest": 4, "static": 5, "analysi": 5, "mypi": 5, "updat": [6, 31], "tool": [6, 25], "tutori": [7, 32], "how": [7, 11, 27, 28, 31, 32], "refer": [7, 32], "standard": [8, 14], "document": [8, 11, 14], "instal": [9, 18, 34], "clone": 9, "repositori": 9, "depend": 9, "see": 9, "what": [9, 25, 35], "wa": 9, "api": [10, 33], "index": 10, "python3": 11, "pip": 11, "skeleton": [11, 23, 25, 28, 31, 35], "cli": 11, "i": 11, "structur": [11, 14, 25, 31], "architectur": [12, 13], "decis": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "record": [12, 13], "1": 13, "statu": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "context": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "consequ": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "3": 14, "4": 15, "sourc": 15, "directori": 15, "5": [16, 22], "pyproject": [16, 22], "toml": [16, 22], "6": 17, "setuptools_scm": 17, "7": 18, "environ": [18, 34], "8": 19, "tox": 19, "9": 20, "theme": 20, "10": 21, "includ": 21, "set": 21, "work": 23, "repo": [23, 28, 35], "main": 23, "dev": 23, "archiv": 23, "process": 23, "chang": 23, "squash": 23, "why": [24, 25], "do": 25, "you": 25, "need": 25, "commandlin": 25, "happen": 25, "merg": [25, 28], "becom": 25, "too": 25, "difficult": 25, "creat": [26, 29, 34, 35], "an": [26, 28], "anaconda": 26, "token": [26, 29, 35], "emb": 27, "excalidraw": 27, "diagram": 27, "adopt": 28, "exist": 28, "exampl": 28, "pypi": [29, 35], "contain": 30, "start": [30, 35], "latest": 31, "user": 32, "explan": 32, "python3_pip_skeleton": 33, "check": 34, "your": [34, 35], "version": 34, "python": 34, "virtual": 34, "librari": 34, "new": 35, "from": 35, "get": 35, "push": 35, "github": 35, "next": 35}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Build the docs using sphinx": [[0, "build-the-docs-using-sphinx"]], "Autobuild": [[0, "autobuild"]], "Contributing to the project": [[1, "contributing-to-the-project"]], "Issue or Discussion?": [[1, "issue-or-discussion"]], "Code coverage": [[1, "code-coverage"]], "Developer guide": [[1, "developer-guide"]], "Run linting using pre-commit": [[2, "run-linting-using-pre-commit"]], "Running pre-commit": [[2, "running-pre-commit"]], "Fixing issues": [[2, "fixing-issues"]], "VSCode support": [[2, "vscode-support"]], "Make a release": [[3, "make-a-release"]], "Run the tests using pytest": [[4, "run-the-tests-using-pytest"]], "Run static analysis using mypy": [[5, "run-static-analysis-using-mypy"]], "Update the tools": [[6, "update-the-tools"]], "Developer Guide": [[7, "developer-guide"]], "Tutorials": [[7, null], [32, null]], "How-to Guides": [[7, null], [32, null]], "Reference": [[7, null], [32, null]], "Standards": [[8, "standards"]], "Code Standards": [[8, "code-standards"]], "Documentation Standards": [[8, "documentation-standards"]], "Developer install": [[9, "developer-install"]], "Clone the repository": [[9, "clone-the-repository"]], "Install dependencies": [[9, "install-dependencies"]], "See what was installed": [[9, "see-what-was-installed"]], "Build and test": [[9, "build-and-test"]], "API Index": [[10, "api-index"]], "python3-pip-skeleton-cli": [[11, "python3-pip-skeleton-cli"]], "How the documentation is structured": [[11, "how-the-documentation-is-structured"]], "Architectural Decision Records": [[12, "architectural-decision-records"]], "1. Record architecture decisions": [[13, "record-architecture-decisions"]], "Status": [[13, "status"], [14, "status"], [15, "status"], [16, "status"], [17, "status"], [18, "status"], [19, "status"], [20, "status"], [21, "status"], [22, "status"]], "Context": [[13, "context"], [14, "context"], [15, "context"], [16, "context"], [17, "context"], [18, "context"], [19, "context"], [20, "context"], [21, "context"], [22, "context"]], "Decision": [[13, "decision"], [14, "decision"], [15, "decision"], [16, "decision"], [17, "decision"], [18, "decision"], [19, "decision"], [20, "decision"], [21, "decision"], [22, "decision"]], "Consequences": [[13, "consequences"], [14, "consequences"], [15, "consequences"], [16, "consequences"], [17, "consequences"], [18, "consequences"], [19, "consequences"], [20, "consequences"], [21, "consequences"], [22, "consequences"]], "3. Standard documentation structure": [[14, "standard-documentation-structure"]], "4. Use a source directory": [[15, "use-a-source-directory"]], "5. Use pyproject.toml": [[16, "use-pyproject-toml"], [22, "use-pyproject-toml"]], "6. Use setuptools_scm": [[17, "use-setuptools-scm"]], "7. Installing developer environment": [[18, "installing-developer-environment"]], "8. Use tox and pre-commit": [[19, "use-tox-and-pre-commit"]], "9. Sphinx Theme": [[20, "sphinx-theme"]], "10. Include vscode settings": [[21, "include-vscode-settings"]], "Working on the Skeleton Repo": [[23, "working-on-the-skeleton-repo"]], "main": [[23, "main"]], "dev-archive": [[23, "dev-archive"]], "Process for making a change": [[23, "process-for-making-a-change"]], "Process for squashing main": [[23, "process-for-squashing-main"]], "Why use pre-commit": [[24, "why-use-pre-commit"]], "Why use a skeleton structure?": [[25, "why-use-a-skeleton-structure"]], "Why do you need the commandline tool?": [[25, "why-do-you-need-the-commandline-tool"]], "What happens if the merges become too difficult?": [[25, "what-happens-if-the-merges-become-too-difficult"]], "Creating an Anaconda Token": [[26, "creating-an-anaconda-token"]], "How to embed Excalidraw diagrams": [[27, "how-to-embed-excalidraw-diagrams"]], "How to adopt the skeleton in an existing repo": [[28, "how-to-adopt-the-skeleton-in-an-existing-repo"]], "Example merge": [[28, "example-merge"]], "Creating a PyPI Token": [[29, "creating-a-pypi-token"]], "Run in a container": [[30, "run-in-a-container"]], "Starting the container": [[30, "starting-the-container"]], "How to update to the latest skeleton structure": [[31, "how-to-update-to-the-latest-skeleton-structure"]], "User Guide": [[32, "user-guide"]], "Explanations": [[32, null]], "API": [[33, "module-python3_pip_skeleton"]], "python3_pip_skeleton": [[33, "python3-pip-skeleton"]], "Installation": [[34, "installation"]], "Check your version of python": [[34, "check-your-version-of-python"]], "Create a virtual environment": [[34, "create-a-virtual-environment"]], "Installing the library": [[34, "installing-the-library"]], "Creating a new repo from the skeleton": [[35, "creating-a-new-repo-from-the-skeleton"]], "Getting started with your new repo": [[35, "getting-started-with-your-new-repo"]], "PyPI Token": [[35, "pypi-token"]], "Running the tests": [[35, "running-the-tests"]], "Building the docs": [[35, "building-the-docs"]], "Pushing to GitHub": [[35, "pushing-to-github"]], "What next?": [[35, "what-next"]]}, "indexentries": {"module": [[33, "module-python3_pip_skeleton"]], "python3_pip_skeleton": [[33, "module-python3_pip_skeleton"]], "python3_pip_skeleton.__version__ (in module python3_pip_skeleton)": [[33, "python3_pip_skeleton.python3_pip_skeleton.__version__"]]}})