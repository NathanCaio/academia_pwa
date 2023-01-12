import { ContactLink } from '@magento/venia-ui/lib/components/ContactPage';

const accountLinks = new Map()
    .set('Categorias', null)
    .set('Peças', null)
    .set('Serviços', null)
    .set('Manutenção', null)
    .set('Sistema de trocas', null);

const aboutLinks = new Map()
    .set('Institucional', null)
    .set('Quem somos', null)
    .set('Nossa história', null)
    .set('Trabalhe conosco', null);

const helpLinks = new Map()
    .set('Ajuda', null)
    .set('Política de Privacidade', null)
    .set('Política de Troca', null)
    .set('Termos e Condições', null)
    .set('FAQ', null)
    .set('Fale conosco', null);

export const DEFAULT_LINKS = new Map()
    .set('account', accountLinks)
    .set('about', aboutLinks)
    .set('help', helpLinks);

export const LOREM_IPSUM =
    'Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor incididunt ut labore et dolore.';
