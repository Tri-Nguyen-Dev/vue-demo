<html class="login-pf"><head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex, nofollow">

    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Sign in to primereact-app</title>
    <link rel="icon" href="/resources/evc0n/login/keycloak/img/favicon.ico">
    <link href="/resources/evc0n/common/keycloak/node_modules/@patternfly/patternfly/patternfly.min.css" rel="stylesheet">
    <link href="/resources/evc0n/common/keycloak/node_modules/patternfly/dist/css/patternfly.min.css" rel="stylesheet">
    <link href="/resources/evc0n/common/keycloak/node_modules/patternfly/dist/css/patternfly-additions.min.css" rel="stylesheet">
    <link href="/resources/evc0n/common/keycloak/lib/pficon/pficon.css" rel="stylesheet">
    <link href="/resources/evc0n/login/keycloak/css/login.css" rel="stylesheet">
    <script type="importmap">
        {
            "imports": {
                "rfc4648": "/resources/evc0n/common/keycloak/node_modules/rfc4648/lib/rfc4648.js"
            }
        }
    </script>
    <script src="/resources/evc0n/login/keycloak/js/menu-button-links.js" type="module"></script>
    <script type="module">
        import { checkCookiesAndSetTimer } from "/resources/evc0n/login/keycloak/js/authChecker.js";

        checkCookiesAndSetTimer(
            "/realms/primereact-app/login-actions/restart?client_id=test-client&tab_id=CGJJJkZj3D8&client_data=eyJydSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJydCI6ImNvZGUiLCJybSI6ImZyYWdtZW50Iiwic3QiOiI5MzA0NWU1Ni01MWJjLTQxNmYtODI1NC1hYWYwODE2MGQyNTYifQ&skip_logout=true"
        );
    </script>

    <style>

        .login-pf-page {
            max-width: 560px;
        }
        .col-xs-12 {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }

        .pf-c-tile {
            border-radius: 4px;
            cursor: pointer;
            box-sizing: border-box;
            padding: 8px;
            border: 1px solid #000;
            position: relative;
            transition: 0.2s ease;
        }

        .pf-c-tile:hover.pf-c-tile:after {
            opacity: 1;
        }

        .pf-c-tile:after {
            width: 100%;
            height: 12px;
            bottom: 0;
            background-color: aqua;
            content: '';
            position: absolute;
            left: 0;

            opacity: 0;

        }

        .fa-mobile:before {
            content: url("icon-phone.svg.svg");
        }

        .pf-c-tile__header {
            display: flex;
            gap: 4px;
            align-items: center;
        }


    </style>
</head>

<body class="">
<div class="login-pf-page">
    <div id="kc-header" class="login-pf-page-header">
        <div id="kc-header-wrapper" class="">primereact-app</div>
    </div>
    <div class="card-pf">
        <header class="login-pf-header">
            <div id="kc-username" class="form-group">
                <label id="kc-attempted-username">minhtri1302.dev@gmail.com</label>
                <a id="reset-login" href="/realms/primereact-app/login-actions/restart?client_id=test-client&amp;tab_id=CGJJJkZj3D8&amp;client_data=eyJydSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJydCI6ImNvZGUiLCJybSI6ImZyYWdtZW50Iiwic3QiOiI5MzA0NWU1Ni01MWJjLTQxNmYtODI1NC1hYWYwODE2MGQyNTYifQ&amp;skip_logout=false" aria-label="Restart login">
                    <div class="kc-login-tooltip">
                        <i class="pficon pficon-arrow fa"></i>
                        <span class="kc-tooltip-text">Restart login</span>
                    </div>
                </a>
            </div>
        </header>
        <div id="kc-content">
            <div id="kc-content-wrapper">


                <form id="kc-otp-login-form" class="form-horizontal" action="http://localhost:8080/realms/primereact-app/login-actions/authenticate?session_code=QeCzzprzbXZQmqtpMzAtETdlWZ4yhQ9f73A2TRZS1e0&amp;execution=78881787-91e6-47c6-8855-4c8f370cf615&amp;client_id=test-client&amp;tab_id=CGJJJkZj3D8&amp;client_data=eyJydSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJydCI6ImNvZGUiLCJybSI6ImZyYWdtZW50Iiwic3QiOiI5MzA0NWU1Ni01MWJjLTQxNmYtODI1NC1hYWYwODE2MGQyNTYifQ" method="post">
                    <div class="form-group">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <input id="kc-otp-credential-0" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="3dc9136b-5fe8-4f24-8b5a-4cfc7ccae072" checked="checked">
                            <label for="kc-otp-credential-0" class="pf-c-tile" tabindex="0">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-2" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-2" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-3" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-3" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-4" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-4" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-5" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-5" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-6" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-6" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-7" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-7" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                            <input id="kc-otp-credential-8" class="pf-c-tile__input" type="radio" name="selectedCredentialId" value="275cb8b6-c112-4a69-a1aa-b023e4c35f89">
                            <label for="kc-otp-credential-8" class="pf-c-tile" tabindex="1">
                                <span class="pf-c-tile__header">
                                    <span class="pf-c-tile__icon">
                                      <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span class="pf-c-tile__title">nvtri4</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <label for="otp" class="pf-c-form__label pf-c-form__label-text">One-time code</label>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <input id="otp" name="otp" autocomplete="off" type="text" class="pf-c-form-control" autofocus="" aria-invalid="">

                        </div>
                    </div>

                    <div class="form-group">
                        <div id="kc-form-options" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="">
                            </div>
                        </div>

                        <div id="kc-form-buttons" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <input class="pf-c-button pf-m-primary pf-m-block btn-lg" name="login" id="kc-login" type="submit" value="Sign In">
                        </div>
                    </div>
                </form>



            </div>
        </div>

    </div>
</div>


</body></html>

<template>
  <div class="ui-pulse-loading component">
    <div class="sk-spinner sk-spinner-pulse"></div>
  </div>
</template>

<script>
export default {
  name: 'UiPulseLoading'
}
</script>

<style scoped lang="scss">
// https://github.com/tobiasahlin/SpinKit/blob/master/css/spinners/5-pulse.css

.sk-spinner-pulse {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
  animation: sk-pulseScaleOut 1s infinite ease-in-out; }

@-webkit-keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0); }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0; } }

@keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0); }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0; } }
</style>
