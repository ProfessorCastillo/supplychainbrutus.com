addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // CORS handling for all requests
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
  }

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Handle GET request (you can customize this response as needed)
  if (request.method === 'GET') {
    return new Response('Supply Chain Brutus API is running', {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
    })
  }

  // Handle POST request
  if (request.method === 'POST') {
    try {
      const reqBody = await request.json()

      // Note: Replace 'YOUR_ANTHROPIC_API_ENDPOINT' with the actual endpoint in your deployment
      const response = await fetch('YOUR_ANTHROPIC_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY, // Note: Ensure this is set in your Worker's environment variables
          'anthropic-version': 'YOUR_ANTHROPIC_API_VERSION' // Replace with your actual API version
        },
        body: JSON.stringify({
          model: reqBody.model,
          max_tokens: reqBody.max_tokens,
          temperature: reqBody.temperature,
          system: SYSTEM_PROMPT, // Note: Ensure this is set in your Worker's environment variables
          messages: reqBody.messages
        })
      })

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`)
      }

      const data = await response.json()
      // Note: Remove or comment out any logging of sensitive data in production
      // console.log('Full API Response:', JSON.stringify(data, null, 2))

      return new Response(JSON.stringify({ content: data.content[0].text }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.error('Error:', error.message)
      return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
  }

  // Handle any other HTTP method
  return new Response('Method not allowed', { 
    status: 405, 
    headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
  })
}
