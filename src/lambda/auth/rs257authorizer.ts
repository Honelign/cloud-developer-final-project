/* 
import { CustomAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda'
import 'source-map-support/register'

import { verify } from 'jsonwebtoken'
import { JwtToken } from '../../auth/JwtToken'

const cert = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJMRZon0ONBnH+MA0GCSqGSIb3DQEBCwUAMCwxKjAoBgNV
BAMTIWRldi0wMnFwZDdhYXlyZWVqcG9zLnVzLmF1dGgwLmNvbTAeFw0yMzAzMDIw
NjA3MDRaFw0zNjExMDgwNjA3MDRaMCwxKjAoBgNVBAMTIWRldi0wMnFwZDdhYXly
ZWVqcG9zLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBALRVTgtr35lQ2mELWyuV3Er0hN1vDQ8CGVcGXB51gE+jjKnWneZOBKAAbzZN
o5vD8UxuVfQou3aOAEnMGskXeuimARtdrdVJM9kziyHaeNYtF27oh/Z6YbnRnPmU
Y7hZ30YS++jo54bvs7nTYyrlxItPSWSoKBIkm6LXGHkPqbyPC6//U49tD/hRoKzK
FSuubwxutPvzGMHvNY1fGZRBpG3ja8kGcgl90NXcNzZ+Kez0SuW4rdJRBOl1Dw4W
VPmj2xih1McycmrDhO8q0GhaLrmcWpF2VmVh1rGKNvkECRLUl11Xmy2i0NnWVufi
ljryN2ipMxcTwWODbCJIf3bciUMCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd
BgNVHQ4EFgQUUBHF2rbpicsqVHo8UyNH0Jvg+uAwDgYDVR0PAQH/BAQDAgKEMA0G
CSqGSIb3DQEBCwUAA4IBAQBi4WfzngnzId+OTtApnygAZUUWmPLo7kOshKK7ARkO
jzkhlTuxiQCr7Gj1RRIowG8rYMUBPMCsZHwEwa//AY7NpOUyjaW3JfQCy1eCiW16
mh5WQ5JW7X7QSBfW6JU9/uqOT9RMRNp3RXBseLTpxV+V8eo20dR8y3hwzIwto7Wk
0gckNBM4flsQNuNuJTnxLSJ1nXT20NMB90t48+nEJ9f9fdrgxUzru6r/VfitR1Tf
HSVSQjbMZHOJICwQxLsgwpd/Ks3v8keMT6EH+hBROsrnW9q/C3AJnMoGHKEVI1X6
PNG6F6kcDUyPanu13YM+5FEkWvJ/I6kql7ZgLsDDqdGA
-----END CERTIFICATE-----`

export const handler = async (event: CustomAuthorizerEvent): Promise<CustomAuthorizerResult> => {
  try {
    const jwtToken = verifyToken(event.authorizationToken)
    console.log('User was authorized', jwtToken)

    return {
      principalId: jwtToken.sub,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*'
          }
        ]
      }
    }
  } catch (e) {
    console.log('User authorized', e.message)

    return {
      principalId: 'user',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: '*'
          }
        ]
      }
    }
  }
}

function verifyToken(authHeader: string): JwtToken {
  if (!authHeader)
    throw new Error('No authentication header')

  if (!authHeader.toLowerCase().startsWith('bearer '))
    throw new Error('Invalid authentication header')

  const split = authHeader.split(' ')
  const token = split[1]

  return verify(token, cert, { algorithms: ['RS256'] }) as JwtToken
}
 */