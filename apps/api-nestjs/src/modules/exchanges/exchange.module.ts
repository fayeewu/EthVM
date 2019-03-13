import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TokenExchangeRateEntity } from '@app/orm/entities/token-exchange-rate.entity'
import { ExchangeService } from '@app/modules/exchanges/exchange.service'
import { TokenExchangeRateResolvers } from '@app/modules/exchanges/token-exchange-rate.resolvers'

@Module({
  imports: [TypeOrmModule.forFeature([TokenExchangeRateEntity])],
  providers: [ExchangeService, TokenExchangeRateResolvers],
  exports: []
})
export class ExchangeModule {}