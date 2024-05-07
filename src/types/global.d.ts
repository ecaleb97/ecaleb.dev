type Messages = typeof import('../messages/en.json');
type EsMessages = typeof import('../messages/es.json');

declare global {
  interface IntlMessages extends Messages, EsMessages {}
}