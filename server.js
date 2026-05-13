import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

const PORT =
  process.env.PORT || 3000

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL

const __filename =
  fileURLToPath(import.meta.url)

const __dirname =
  path.dirname(__filename)

app.use(cors())

app.use(express.json())

/********************************************************
 * API HEALTH CHECK
 ********************************************************/

app.get("/api/health", (req, res) => {

  res.json({

    success: true,

    system:
      "ONN NODE PROXY",

    status: "RUNNING",

    appsScriptConfigured:
      !!APPS_SCRIPT_URL

  })

})

/********************************************************
 * MAIN API PROXY
 ********************************************************/

app.post("/api", async (req, res) => {

  try {

    if (!APPS_SCRIPT_URL) {

      return res.status(500).json({

        success: false,

        error:
          "Missing APPS_SCRIPT_URL environment variable"

      })

    }

    console.log(

      "FORWARDING REQUEST:",
      req.body

    )

    const response =
      await fetch(

        APPS_SCRIPT_URL,

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify(
              req.body
            ),

          redirect: "follow"

        }

      )

    const text =
      await response.text()

    console.log(

      "APPS SCRIPT RESPONSE:",
      text

    )

    if (!text || !text.trim()) {

      return res.status(500).json({

        success: false,

        error:
          "Apps Script returned empty response"

      })

    }

    try {

      const data =
        JSON.parse(text)

      return res.json(data)

    } catch (jsonError) {

      return res.status(500).json({

        success: false,

        error:
          "Invalid JSON returned from Apps Script",

        rawResponse:
          text

      })

    }

  } catch (error) {

    console.error(

      "SERVER ERROR:",
      error

    )

    return res.status(500).json({

      success: false,

      error:
        error.toString()

    })

  }

})

/********************************************************
 * FRONTEND BUILD SERVING
 ********************************************************/

app.use(

  express.static(

    path.join(
      __dirname,
      "dist"
    )

  )

)

app.get("*", (req, res) => {

  res.sendFile(

    path.join(

      __dirname,

      "dist",

      "index.html"

    )

  )

})

/********************************************************
 * START SERVER
 ********************************************************/

app.listen(PORT, () => {

  console.log(

    `ONN SERVER RUNNING ON PORT ${PORT}`

  )

})