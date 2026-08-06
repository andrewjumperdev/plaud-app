export type DiagnosticoAnswers = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string[];
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  q12: string;
  q13: string;
  q14: string;
  q15: string;
};

export const SYSTEM_PROMPT = `ROL: Sos un arquitecto de sistemas de documentación profesional. Tu única función es
construir plantillas de procesamiento de audio para Plaud a partir de un diagnóstico.

REGLA CENTRAL: Cada plantilla que generás debe ser tan específica que sea imposible
confundirla con la de otro profesional. Si puede usarse para alguien de otra industria
sin modificación, está mal construida.

REFERENCIA — QUÉ SIGNIFICA ESPECÍFICO (memorizar este contraste):

Input: abogada laboralista, primera consulta, perdió por precio mal documentado.

OUTPUT CORRECTO:
 [PRECIO VERBAL — CONFIRMAR MONTO Y MODALIDAD POR ESCRITO]
 Honorarios: $___ Modalidad: ___ Firmado: [ ] sí [ ] pendiente

OUTPUT INCORRECTO:
 Honorarios: [registrar los honorarios acordados]

Por qué el correcto funciona: nombra la vulnerabilidad exacta (precio verbal),
fuerza el registro de los datos específicos (monto + modalidad), incluye
confirmación de firma. El incorrecto podría estar en cualquier plantilla.

PROFUNDIDAD SEGÚN EXPOSICIÓN (Q8):
 Baja -> 2-3 campos por sección
 Media -> 4-5 campos por sección
 Alta -> 6-7 campos, sección de riesgo obligatoria
 Crítica -> 7+ campos, verificación de responsable en cada compromiso

PROHIBIDO: [URGENTE], [IMPORTANTE], [ATENCIÓN] genéricos.
OBLIGATORIO: El marcador de alerta primario se construye desde Q11.`;

const PASO_B_INSTRUCTIONS = `Con los datos del diagnóstico anterior, construí la plantilla en 7 pasos:

PASO 1 - LÍNEA DE ROL
Escribí: "Sos asistente especializado en [Q1], con experiencia en [Q2].
Procesás grabaciones de [Q5] y generás [Q15] para [Q14]."
Test: si reemplazás Q1 y Q2 por otra industria y la frase sigue siendo válida
-> reescribila con más detalle específico.

PASO 2 - VOCABULARIO OBLIGATORIO
Identificá los términos de Q10. Deben aparecer al menos 3 veces en la plantilla.
Si no aparecen -> la plantilla está incompleta.

PASO 3 - SECCIONES PRINCIPALES
Una sección independiente por cada ítem de Q5.
Cada sección captura las decisiones de Q7.
Profundidad según Q8 (ver escala en el SYSTEM PROMPT).

PASO 4 - CAMPO SIEMPRE PRESENTE
Los datos de Q12 aparecen en CADA sección.
Si el audio no los menciona -> [NO ESPECIFICADO — completar manualmente]

PASO 5 - MARCADOR DE ALERTA PRIMARIO
Leé Q11. Construí el marcador con esta lógica:
 Q11 = perdió por precio -> [PRECIO VERBAL — SIN CONFIRMACIÓN ESCRITA]
 Q11 = perdió por plazo -> [FECHA COMPROMETIDA — VERIFICAR CUMPLIMIENTO]
 Q11 = perdió por cambio -> [MODIFICACIÓN SIN APROBACIÓN FORMAL REGISTRADA]
 Q11 = perdió por seguimiento -> [PRÓXIMO CONTACTO PENDIENTE — VENCE: ___]
Nunca usar marcadores genéricos si tenés información específica de Q11.

PASO 6 - FORMATO DE SALIDA
 Q15 = "lista de pendientes" -> numerada, ordenada por urgencia/plazo
 Q15 = "minuta formal" -> tercera persona, lenguaje formal
 Q15 = "resumen ejecutivo" -> máximo 5 puntos, sin detalle operativo
 Q15 = "ficha estructurada" -> secciones etiquetadas, campos explícitos
 Q15 = "email al cliente" -> saludo, cuerpo, próximo paso, firma

Si Q13 indica CRM, Notion, Sheets u otro sistema, agregar al final del output:
--- CAMPOS PARA SISTEMA EXTERNO ---
cliente: [valor]
fecha: [valor]
compromiso: [valor]
proximo_paso: [valor]
responsable: [valor]
estado: [valor]

PASO 7 - AUTOVALIDACIÓN (ejecutar antes de entregar)
[ ] Los términos de Q10 aparecen al menos 3 veces
[ ] Hay una sección por cada conversación de Q5
[ ] El marcador de alerta nombra específicamente la pérdida de Q11
[ ] El formato responde exactamente a Q15
[ ] La plantilla NO puede usarse para otra industria sin modificación
 -> Si la última respuesta es NO: entregar.
 -> Si la última respuesta es SÍ: NO entregar. Revisar desde el Paso 1.

Entregá directamente la plantilla final, lista para pegar en Plaud. No incluyas explicaciones sobre el proceso ni repitas estas instrucciones en la respuesta.`;

export function buildUserPrompt(answers: DiagnosticoAnswers): string {
  const json = JSON.stringify(
    {
      Q1: answers.q1,
      Q2: answers.q2,
      Q3: answers.q3,
      Q4: answers.q4,
      Q5: answers.q5,
      Q6: answers.q6,
      Q7: answers.q7,
      Q8: answers.q8,
      Q9: answers.q9,
      Q10: answers.q10,
      Q11: answers.q11,
      Q12: answers.q12,
      Q13: answers.q13,
      Q14: answers.q14,
      Q15: answers.q15,
    },
    null,
    2
  );

  return `${json}\n\n${PASO_B_INSTRUCTIONS}`;
}
