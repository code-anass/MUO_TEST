export const GA4_CONFIG = {
    client_email: "mou-web-local@mou-web-local.iam.gserviceaccount.com",
    private_key:("-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4SlH7YmH2YafL\nqsIUOTjM7M8FmVtPdi6xi+juALqhkF/APgFgJtuGlkfUTcMwtRfpSpguF+kcAftV\njnsfSFf2QWY74QCQ/fd/5OP3Fa4YuIQlTg98Ns2DTugUmVahg9f2BzfSP4R4JeTa\nsyTH3Mvte3Kd09YK7WH/9c4zXjKrVGJf+Fw7lZQ66Y2HN2PjmwhDRzwMEB56qz8t\nApewySqjkmacXvcSiwcwNuqz3d2XSuh6YAnmVJ1Pnt8lVVKkpVkWJ4vyewaNeRkb\nsgXMGEGau3FhZmHhaXmnGebVoJaBz+V1+AbHYvXAAfhuvi0E3wwDTtZu2fqgs9th\nH2nCpGd1AgMBAAECggEAQJjse61UoURByMYmGWilXE91kYTb2NKYM2vTTfm7cX5l\n0cDqQoXcVSTAMM7BKIWRyBh5l06SS1r2elrjFWgKTStHZp3L0Qb0hkP5FFbpG4kx\n6NGf4+5hwzEZcH7/OsY4IOkOzAevq129Blvc/KGMacXnuyLR2Cq1Oz8x9BeEs0Db\nrqe3EMvKrz1xIr5YT3lFtz/U2rW5hoMBndHASEaBEZjkr4FRk9LfTGlF1djh6Xpu\nrwqwpGu6dS8k1uXKkgj2x6w5Qq0Usikd+TIT9+Grqz3ToPkkoLRnoKUeO/VO/bin\nv1qh8bjAifXOMGHCCbm5Uawaj8l/zeaQ7S0kr5TG0QKBgQDzCsvUjRMQ6rytyh8k\nxMl7cb4xgSTDlp5HClZgut0XtftNHVtY6KdPZ+9EPWfr4Dd3qvdqBmMjFN/e8+TT\nZO90fKEOWvUOgGGgmWXlUJGzfJAn2uAeGvuA0LhnhA2CZhqZTTnQL+nru9srippc\nNtE03Sked1bz6vzTYyO1zs4aswKBgQDCHaOSxoEjCjCGaAFBgdlLBLxkPu7fuYTs\nAGabrgja5RlTQyBQDcHOKuAqD5f1WBSkdRUXtHo/x7jfDOcCID67cu8CzBjPLvMB\nje5e3fnKBJDYDGCrWWKZ9832l5BfAbltPASVlEciJWx4ktV3+H46KLeGLTmondcj\nlmj7iJIpNwKBgAJKtcVZVzavn/vbjhOgr220kuCQoTIe93sgA9SBrpgMpUQC5Nuf\nxgQfrMft9E7rHFrKh+6+BK1OAxZtIllD+GYWzsX94ZWzbDhBeg6Bhf41TH6zt61Q\n/9IlJbgELMRwBgwwCD2IViJc8SIl+nKoKazf8QVShsViD+RGaQ3L13G1AoGAXr/C\n2ODFpcnSd7iKbGQqISD1p+TECjXuuJdVfkXLkrTi0K5iNlEQuUZaVo13+cx9fuyb\nWA/C4CDnjxAoLfR5SlvGaFIhBff/q1GQ+YNV6pKh9KLOCLU/mLHJOcUvNgCMdtIl\n1rEiq3si4BOj2MRVMKQxOHAYxcINghRnt+comK8CgYEAxdzaDiYlmyHxQthmTpbf\nJKK1w3dGbylra+90FjQ0UQ53V4u9chB2bFvnF4Mc4Q8jvvDRpvU+jkdKHRv/Ci+m\nfT5oBXtgHLs2Axp5+tTaEjbnIDe/Im9gtegC0vRlkdgP5VP8wQGDBbzlt+eelEm2\nfuQXNclfP/o2ob89XXVbT4w=\n-----END PRIVATE KEY-----\n").replace(/\\n/g, '\n'),
    viewId: 'properties/G-EXC8CLD29P' // Replace XXXXXXXX with your GA4 property ID
  };
  
  export const GA4_SCOPES = [
    'https://www.googleapis.com/auth/analytics.readonly'
  ];
  
  export const GA4_KEY_FILE_LOCATION = require('./service-account-key.json');
  