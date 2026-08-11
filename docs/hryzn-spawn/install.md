# Installation Guide

If you're confused or need more help, feel free to open an issue on the [GitHub repo](https://github.com/Hryzen-Studios/hryzn_spawn).

## 1. Download Resources

* Before installing, make sure you have all the [Required Resources](/hryzn-spawn/requirements)
* Download `hryzn_spawn` from its [GitHub repo](https://github.com/Hryzen-Studios/hryzn_spawn)

## 2. Install Files

::: warning
Do not rename the `hryzn_spawn` folder otherwise the script will not work correctly.
:::

* Drag & drop the folder into your server's `resources` directory
* **Remove or disable `qbx_spawn`.** `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point — running both at once will cause the spawn selector to trigger twice or behave unpredictably.

## 3. Add to server.cfg

Add it after its dependencies:

```ini
ensure ox_lib
ensure oxmysql
ensure versa_sdk
ensure qbx_core
ensure hryzn_spawn
```

## 4. Configure Script

* Inside the `hryzn_spawn` folder there is a `config` folder which contains the shared and client config files.
* See the [Configuration](/hryzn-spawn/configuration) page for every available option.

## 5. Verify

* Restart the resource (`refresh` + `ensure hryzn_spawn`, or restart the server)
* Create a new character or reconnect — you should see the custom camera scene and DUI spawn selector instead of the default `qbx_spawn` UI
