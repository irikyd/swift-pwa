import { useQuery } from '@apollo/client';
import * as Schema from '@core_modules/customCatalog/services/graphql/schema';

export const getProducts = () => useQuery(Schema.getProducts);

