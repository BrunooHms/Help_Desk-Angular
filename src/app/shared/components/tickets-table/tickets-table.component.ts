import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

interface Ticket {
  id: number;
  title: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  status: 'Aberto' | 'Em andamento' | 'Resolvido';
  responsible: string;
  openOfDate: string;
}

@Component({
  selector: 'app-tickets-table',
  imports: [MatTableModule, MatChipsModule],
  templateUrl: './tickets-table.component.html',
  styleUrl: './tickets-table.component.scss'
})
export class TicketsTableComponent {

  displayedColumns = ['id', 'title', 'priority', 'status', 'responsible', 'openOfDate'];

  dataSource: Ticket[] = [
    { id: 101, title: 'Erro ao acessar sistema', priority: 'Alta', status: 'Aberto', responsible: 'Carlos Silva', openOfDate: '08/12/2025, 09:30'},
    { id: 102, title: 'Impressora não funciona', priority: 'Média', status: 'Em andamento', responsible: 'Ana Paula', openOfDate: '08/12/2025, 08:00' },
    { id: 103, title: 'Solicitação de acesso', priority: 'Baixa',status: 'Resolvido', responsible: 'Carlos Silva', openOfDate: '08/12/2025, 14:20'  },
    { id: 103, title: 'Solicitação de acesso', priority: 'Baixa',status: 'Resolvido', responsible: 'Carlos Silva', openOfDate: '08/12/2025, 14:20'  },
    { id: 103, title: 'Solicitação de acesso', priority: 'Baixa',status: 'Resolvido', responsible: 'Carlos Silva', openOfDate: '08/12/2025, 14:20'  }
  ];

  
}
